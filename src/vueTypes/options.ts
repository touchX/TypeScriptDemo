export type Prop<T> = { (): T } | { new(...args: never[]): T & object } | { new(...args: string[]): Function }

export type PropType<T> = Prop<T> | Prop<T>[];

//export type PropValidator<T> = PropOptions<T> | PropType<T>;

/**
 *  针对于函数类型
 */
type MyProp<T> ={ 
  ():T
  COUNT?:number
}

/**
 * new 关键字通常用在接口中， 用于工厂模式产生带有构造函数的实例
 */
type MyProp2<T> = { 
  new(...args: never[]): T & object 

  STATIC_PROP:string
}

class MyCls{
  static STATIC_PROP = 'MyCls' 
  constructor(name:string){
    
  }
}

let myPropVoid:MyProp<void> = ()=>{}
let myPropNum:MyProp<number> = ()=>0
myPropNum.COUNT = 20 


function factory(Glass:MyProp2<MyCls>){
  console.info(Glass.STATIC_PROP)
  return new Glass()
}

factory(MyCls)
 

interface IMyCls<T>{
  new (...args: string[]):T & object
}



function create(glass:IMyCls<MyCls>){
  return new glass('fefe')
}

create(MyCls)

let aa:MyCls & object = new MyCls('afef')


