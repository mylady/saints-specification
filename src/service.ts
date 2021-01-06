
import { Config } from './config';
import { RestResponse } from './rest';
import { URLSearchParams } from 'url';
import got from 'got';

const HubTemplateAddress = `http://ip:${Config.serviceHubPort}/rest`;
const ServiceRegisterInterval = 10;

export enum ServiceType {
    IdentityService = 0,
    FileHub = 1,
    DeviceService = 2,
    CloudProxyService = 3,
    MonitorService = 4,
    MessageHub = 5,
    EventService = 6,
    LogService = 7,
    TimeSerialService = 8
};

/*
'0': '身份认证服务',
    '1': '文件管理服务',
    '2': '设备信息服务',
    '3': '云代理服务',
    '4': '实时监控服务',
    '5': '消息服务',
    '6': '事件服务',
    '7': '日志服务',
    '8': '时间流服务'
*/

export class Service {
    address: string;
    type: ServiceType;
    priority: number;

    constructor(address: string, type: ServiceType, priority: number) {
        this.address = address;
        this.type = type;
        this.priority = priority;
    }
}


export class ServiceFinder {
    hub: string;
    constructor(ip: string) {
        this.hub = HubTemplateAddress.replace('ip', ip);
    }

    async listService() {
        let v = await got.get(`${this.hub}/list`, {
            responseType: 'json'
        });
        return v.body;
    }

    async searchService(type: ServiceType) {
        let qs = new URLSearchParams([['service_type', type.toString()]]);
        let v = await got.get(`${this.hub}/search`, {
            searchParams: qs,
            responseType: 'json'
        });
        return v.body;
    }
}


export class ServiceRegister {
    private running: boolean;
    private timer = null;
    private hub: string;
    service: Service;

    constructor(ip: string, service: Service) {
        this.running = false;
        this.timer = null;
        this.service = service;
        this.hub = HubTemplateAddress.replace('ip', ip);
    }

    start() {
        if (this.running) {
            return;
        }

        this.running = true;
        this.timer = setInterval(() => {
            registerService(this.hub, this.service);
        }, ServiceRegisterInterval * 1000);
    }

    stop() {
        if (!this.running) {
            return;
        }

        if (this.timer) {
            this.running = false;
            clearInterval(this.timer);
        }
    }
}

const registerService = async (url: string, service: Service) => {
    try {
        let v = await got.post(url, {
            json: service,
            responseType: 'json'
        });

        let res = v.body as RestResponse;
        if (!res.result) {
            console.error('register service failed', res.err_msg);
        }
    } catch (err) {
        console.error('register service failed', err.message);
    }
}