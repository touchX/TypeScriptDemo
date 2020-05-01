/// <reference path="./type.d.ts" />
/// <reference path="./const.ts" />

declare module 'ble'{
  /**
   * 判断是否有访问蓝牙的权限
   * @param callback
   * @可用性 iOS 系统
   */
  export function sysAuth(callback:(
    ret:IResult & {details:'notDetermined'|'restricted'|'denied'|'authorized'},
    err:IError)=>void
  ):void

  /**
   * 初始化蓝牙4.0管理器
   */
  //type BleStatus = 'poweredOn'|'poweredOff'|'resetting'|'unauthorized'|'unknown'|'unsupported'
  export function initManager(callback:(ret:{state:BLE_STATUS})=>void):void


  export function scan(
    param:{
      serviceUUIDs?:string[], //要扫描的蓝牙4.0设备的服务（service）的 UUID（字符串） 组成的数组，若不传则扫描附近的所有支持蓝牙4.0的设备
      clean?:boolean //扫描前是否清空已搜索到的记录在本地的外围设备信息  默认：true
    },
    callback:ICallback
  ):void






}
