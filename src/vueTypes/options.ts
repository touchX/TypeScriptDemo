export type Prop<T> = { (): T } | { new(...args: never[]): T & object } | { new(...args: string[]): Function }

export type PropType<T> = Prop<T> | Prop<T>[];

//export type PropValidator<T> = PropOptions<T> | PropType<T>;

/**
 *  针对于函数类型, 函数具有属性
 */
type FunctionType<T> ={ 
  ():T          //函数定义
  COUNT?:number //函数的属性
}

/**
 * 类类型。new 关键字通常用在接口中， 用于工厂模式产生带有构造函数的实例
 */
type ClassType<T> = { 
  new(...args: never[]): T & object //类的构造函数

  STATIC_PROP:string   //类的静态属性
}

class MyCls{
  static STATIC_PROP = 'MyCls' 
  constructor(name:string){
    console.info(MyCls.STATIC_PROP)
  }
  public action(){
    console.info('do something')
  }
}

let myPropVoid:FunctionType<void> = ()=>{}
let myPropNum:FunctionType<number> = ()=>0
myPropNum.COUNT = 20 


function factory(Glass:ClassType<MyCls>){
  return new Glass()
}

let myCls = factory(MyCls)
myCls.action()
 

interface IMyCls<T>{
  new (...args: string[]):T & object
}



function create(glass:IMyCls<MyCls>){
  return new glass('fefe')
}

create(MyCls)

let aa:MyCls & object = new MyCls('afef')


type CreateFun = { new(...args: string[]): Function }

class FunCls{
  constructor(name:string){
    console.info('return a function')
    return function(){

    }
  }
}

function createFunClscreateFunCls(cls:CreateFun, name:string){
  return new cls(name)
}


