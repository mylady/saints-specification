'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var schoolWaterUsage = {
    canteen: {
        name: '食堂用水',
        value: 0
    },
    life: {
        name: '生活用水',
        value: 1
    },
    teacher: {
        name: '教工饮水',
        value: 2
    },
    student: {
        name: '学生饮水',
        value: 3
    }
};

Object.freeze(schoolWaterUsage);
exports.default = schoolWaterUsage;