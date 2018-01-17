/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var prisonRoomStatus = {
  unavailable: {
    name: '不可用',
    value: 0
  },
  free: {
    name: '空闲',
    value: 1
  },
  using: {
    name: '使用中',
    value: 2
  }
};

Object.freeze(prisonRoomStatus);
exports.default = prisonRoomStatus;