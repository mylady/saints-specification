/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

let prisonMeetingRoomStatus = {
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
  },
  locked:{
    name:'锁定',
    value:3
  }
};

Object.freeze(prisonMeetingRoomStatus);
export default prisonMeetingRoomStatus;