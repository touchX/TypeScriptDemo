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