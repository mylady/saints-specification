/**
 * Created by MyLady on 16/5/31.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var transmitMessageSpec = {
  helloEvent: 'hello',
  joinEvent: 'join_room',
  leaveEvent: 'leave_room',
  messageUpEvent: 'message_up',
  messageDownEvent: 'message_down',
  deviceEventRoom: 'device_event',
  deviceStatusRoom: 'device_status',
  deviceControlRoom: 'device_control',
  digitalControlRoom: 'digital_control',
  maintainRoom: 'maintain',
  hospitalRoom: 'hospital',
  prisonRoom: 'prison',
  bioIdentifyRoom: 'bio_identify',
  saintsNameSpace: "saints",
  thirdpartyNameSpace: 'thirdparty'
};
Object.freeze(transmitMessageSpec);
var _default = transmitMessageSpec;
exports.default = _default;