/**
 * Created by MyLady on 05/05/2017.
 */
'use strict';

let prisonRoomStatus = {
  available: {
    name: '可用',
    value: 0
  },
  unavailable: {
    name: '不可用',
    value: 1
  },
  meeting: {
    name: '会见中',
    value: 2
  },
  arraigning: {
    name: '提审中',
    value: 3
  }
};

Object.freeze(prisonRoomStatus);
export default prisonRoomStatus;