interface IResult{
  status:boolean
  [prop:string]:any
}
interface IError{
  code?:number
  msg?:string
  [prop:string]:any
}
type ICallback = (ret:IResult, err:IError)=>void 

