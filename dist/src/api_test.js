"use strict";
/// <reference path="../types/modules/const.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
console.info(api.appId);
var ble = api.require('ble');
ble.initManager(function (ret) {
    console.info(ret.state);
    if (ret.state == BLE_STATUS.POWERED_OFF) {
        console.error('蓝牙已关闭');
    }
});
var db = api.require('db');
db.openDatabase({ name: 'test.db' }, function (ret, err) {
    if (ret.status) {
    }
    else {
        console.warn(err.msg);
    }
});
var fs = api.require('fs');
fs.open({ path: 'my.db', flags: FILE_OPEN_TYPE.READ }, function (ret, err) {
    if (ret.fd) {
    }
    else {
        console.warn(err.msg);
    }
});
