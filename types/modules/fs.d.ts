declare module 'apicloud-fs'{
  /**
   * 创建目录 
   * @param param 
   * @param callback
   * iOS系统，Android系统 
   */
  export function createDir(
    param:{
      path:string //目标路径
    },
    callback:(ret:IResult,err:IError)=>void
  ):void 


  /**
   * 删除文件目录，里面的所有文件将会一起被删除 
   * @param param 
   * @param callback
   * iOS系统，Android系统 
   */
  export function rmdir(
    param:{path:string},
    callback:ICallback
  ):void

  /**
   * 创建文件 
   * @param params 
   * @param callback 
   */
  export function createFile(params:{path:string}, callback:ICallback):void

  /**
   * 删除文件 
   * @param params 
   * @param callback 
   */
  export function remove(params:{path:string}, callback:ICallback):void

  /**
   * 拷贝文件 
   * @param params 
   * @param callbak 
   */
  export function copyTo(params:{oldPath:string, newPath:string}, callbak:ICallback):void

  /**
   * 移动文件 
   * @param params 
   * @param callback 
   */
  export function moveTo(params:{oldPath:string, newPath:string}, callback:ICallback):void

  /**
   * 重命名 
   * @param params 
   * @param callback 
   */
  export function rename(params:{oldPath:string, newPath:string}, callback:ICallback):void

  /**
   * 列出目录 
   * @param params 
   * @param callback 
   */
  export function readDir(params:{path:string}, callback:(ret:IResult & {data:string[]}, err:IError)=>void):void

  /**
   * 打开文件 
   * @param params 
   * @param callback 
   */
  export function open(params:{path:string, flags:FILE_OPEN_TYPE},callback:(ret:IResult & {fd:string}, err:IError)=>void):void

  /**
   * 读取文件 
   * @param params 
   * @param callback 
   */
  export function read(
    params:{
      fd:string, //open 方法得到的文件句柄
      offset?:number, //当前文件偏移量，以 byte 为单位  默认值：0
      length?:number, //读取内容长度 . 原文件文本内容的长度，以 byte 为单位
      codingType?:'gbk'|'utf8'
    },
    callback:(ret:IResult & {data:string}, err:IError)=>void
  ):void

  /**
   * 从当前文件句柄当前位置向上读取一页(页的大小如 length )数据 
   * @param params 
   * @param callback 
   */
  export function readUp(
    params:{
      fd:string, //open 方法得到的文件句柄
      length?:number, //读取内容长度 . 原文件文本内容的长度，以 byte 为单位
      codingType?:'gbk'|'utf8'
    },
    callback:(ret:IResult & {data:string}, err:IError)=>void
  ):void

  /**
   * 从当前文件句柄当前位置向下读取一页(页的大小如 length )数据 
   * @param params 
   * @param callback 
   */
  export function readDown(
    params:{
      fd:string, //open 方法得到的文件句柄
      length?:number, //读取内容长度 . 原文件文本内容的长度，以 byte 为单位
      codingType?:'gbk'|'utf8'
    },
    callback:(ret:IResult & {data:string}, err:IError)=>void
  ):void

  /**
   * 写入文件
   * @param params 
   * @param callback 
   */
  export function write(
    params:{
      fd:string, //open 方法得到的文件句柄
      data:string, 
      offset?:number, //写入内容的起始位置以 byte 为单位  默认值：原文件文本内容的长度
      overwrite?:boolean, //是否覆盖指定偏移位置后面的内容 默认值：false
      codingType?:'gbk'|'utf8'
    },
    callback:ICallback
  ):void

}