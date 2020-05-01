import * as api from 'api'
import * as ble from 'ble'
import * as db from 'db'
import * as fs from 'apicloud-fs'



declare namespace ApiCloud{
  export type IApi =  typeof api
  export type IBle = typeof ble 
  export type IDb = typeof db
  export type IFs = typeof fs
}


/**
 * 为 window 增添全局变量，需要重新声明一下 window 
 * 对于单文件 declare var window: Window & { api:ApiCloud.IApi, apiready:Function };
 * 全局使用, 如下
 */
declare global{
  interface Window{
    api:ApiCloud.IApi
    apiready:()=>void
  }
}

