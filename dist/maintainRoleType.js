/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var maintainRoleType = {
  owner: {
    name: '业主',
    value: 0
  },
  manager: {
    name: '总包',
    value: 1
  },
  maintainer: {
    name: '运维人员',
    value: 2
  },
  supervisor: {
    name: '监理',
    value: 3
  }
};
Object.freeze(maintainRoleType);
var _default = maintainRoleType;
exports.default = _default;