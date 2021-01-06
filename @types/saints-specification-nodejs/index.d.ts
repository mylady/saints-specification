import { CodeMap } from './code-map';
import { TwoDimension, ThreeDimension } from './dimension';
import { SpecError } from './error';
import { EnvMonitorValue, PowerGridValue, UPSValue, RFIDTagValue, CallValue, VideoAnalyseValue, VideoAnalyseType, Face, CarPlate } from './interface-value';
import { Message, MessageType } from './message';
import { RestQuery, RestResponse } from './rest';
import { Service, ServiceFinder, ServiceRegister, ServiceType } from './service';
declare const _default: {
    CodeMap: typeof CodeMap;
    SpecError: typeof SpecError;
    TwoDimension: typeof TwoDimension;
    ThreeDimension: typeof ThreeDimension;
    Config: {
        envDevelopment: string;
        envProducton: string;
        defaultConfigPath: string;
        serviceHubPort: number;
    };
    ResourceCode: CodeMap[];
    InterfaceCategory: CodeMap[];
    Message: typeof Message;
    MessageTopics: CodeMap[];
    MessageType: typeof MessageType;
    DeviceAlarmCode: CodeMap[];
    DeviceEventCode: CodeMap[];
    DeviceStatusCode: CodeMap[];
    DeviceFaultCode: CodeMap[];
    EnvMonitorValue: typeof EnvMonitorValue;
    PowerGridValue: typeof PowerGridValue;
    UPSValue: typeof UPSValue;
    RFIDTagValue: typeof RFIDTagValue;
    CallValue: typeof CallValue;
    VideoAnalyseValue: typeof VideoAnalyseValue;
    VideoAnalyseType: typeof VideoAnalyseType;
    Face: typeof Face;
    CarPlate: typeof CarPlate;
    RestQuery: typeof RestQuery;
    RestResponse: typeof RestResponse;
    Service: typeof Service;
    ServiceFinder: typeof ServiceFinder;
    ServiceRegister: typeof ServiceRegister;
    ServiceType: typeof ServiceType;
};
export default _default;
