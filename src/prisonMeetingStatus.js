'use strict';

let prisonMeetingStatus= {
  waiting: {
    name: '等待中',
    value: 0
  },
  ongoing: {
    name: '进行中',
    value: 1
  },
  finished:{
    name:'已结束',
    value:2
  },
  canceled:{
    name:'已取消',
    value:3
  }
};

Object.freeze(prisonMeetingStatus);
export default prisonMeetingStatus;