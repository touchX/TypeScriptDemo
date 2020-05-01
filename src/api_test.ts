/// <reference path="../types/modules/const.ts" />

import { ApiCloud } from "../types/apicloud";

declare const api:ApiCloud.IApi 

console.info(api.appId)

let ble:ApiCloud.IBle = api.require('ble')
ble.initManager(ret=>{
  console.info(ret.state)
  if(ret.state == BLE_STATUS.POWERED_OFF){
    console.error('蓝牙已关闭') 
  }
})


const db:ApiCloud.IDb = api.require('db')
db.openDatabase({name:'test.db'},(ret,err)=>{
  if(ret.status){

  }else{
    console.warn(err.msg)
  }
})

const fs:ApiCloud.IFs = api.require('fs')
fs.open({path:'my.db', flags:FILE_OPEN_TYPE.READ},(ret,err)=>{
  if(ret.fd){

  }else{
    console.warn(err.msg);
  }
})