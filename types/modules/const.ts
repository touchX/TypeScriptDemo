/**
 * db模块 sqlite 常量
 */
enum DB_ERROR {
  SQLITE_OK,
  SQLITE_ERROR,
  SQLITE_INTERNAL,
  SQLITE_PERM, 
  SQLITE_ABORT,
  SQLITE_BUSY,
  SQLITE_LOCKED,
  SQLITE_NOMEM,
  SQLITE_READONLY,
  SQLITE_INTERRUPT,
  SQLITE_IOERR,
  SQLITE_CORRUPT,
  SQLITE_NOTFOUND,
  SQLITE_FULL,
  SQLITE_CANTOPEN,
  SQLITE_PROTOCOL,
  SQLITE_EMPTY,
  SQLITE_SCHEMA,
  SQLITE_TOOBIG,
  SQLITE_CONSTRAINT,
  SQLITE_MISMATCH,
  SQLITE_MISUSE,
  SQLITE_NOLFS,
  SQLITE_AUTH,
  SQLITE_FORMAT,
  SQLITE_RANGE,
  SQLITE_NOTADB,
  SQLITE_NOTICE,
  SQLITE_WARNING,
  SQLITE_ROW,
  SQLITE_DONE 
}

/**
 * 蓝牙初始化状态常量
 */
////type BleStatus = 'poweredOn'|'poweredOff'|'resetting'|'unauthorized'|'unknown'|'unsupported' 
enum BLE_STATUS {
  POWERED_ON = 'poweredOn',
  POWERED_OFF = 'poweredOff',
  RESETTING = 'resetting',
  UNAUTHORIZED = 'unauthorized',
  UNKNOWN = 'unknown',
  UNSUPPORTED = 'unsupported'
}

/**
 * fs文件系统错误常量
 */
const FS_ERROR = ['没有错误','找不到文件错误','不可读取错误','编码格式错误','无效操作错误','无效修改错误','磁盘溢出错误','文件已存在错误']
enum FILE_OPEN_TYPE{
  READ = 'read',
  WRITE = 'write',
  READ_WRITE =  'read_write' 
} 

