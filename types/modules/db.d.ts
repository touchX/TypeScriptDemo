declare module 'db'{
  /**
   * 获取指定目录下的子文件 
   * @param param 
   * @param callback 
   */
  export function subfile(
    param:{
      directory?:string //目录路径，不传时使用 db 模块的默认路径。支持 fs://、widget://等协议（如fs://user.db）默认值：本模块自动创建的路径
    },
    callback:(
      ret:IResult & {files:string[], follders:string[]},
      err:IError
    )=>void
  ):void 

  /**
   * 打开数据库，若数据库不存在则创建数据库。 
   * @param param 
   * @param callback 
   */
  export function openDatabase(
    param:{
      name:string, //数据库名称
      path?:string  //数据库所在路径，不传时使用默认创建的路径。支持 fs://、widget://等协议（如fs://user.db） 默认值：自动创建的路径 
    },
    callback:(
      ret:IResult,
      err:IError
    )=>void
  ):void
}