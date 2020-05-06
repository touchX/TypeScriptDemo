/// <reference path="../types/modules/const.ts" />

import { ApiCloud  } from "../types";

//声明一下window 单文件：
//declare const window:Window & {api:ApiCloud.IApi}

const api = window.api
const Vue = window.Vue




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


type ObjectKey = 'a' | 'b'

function aa(b:<T extends ObjectKey>):void{
  
}


interface keys{
  a:string,
  b:string
}
type num = 1

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}
interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: 'Jarid',
  age: 35
};
let strings: any[] = pluck(person, ['name','age']); // ok, string[]
console.info(strings)

type  enumtype = 'a'|'b'

type myObj<T, K extends enumtype> = {
  [P in K]:T
} 

type NonObjectPropKeys<T> = { [K in keyof T]: T[K] extends any[] ? K : T[K] extends object ? never : K }[keyof T]