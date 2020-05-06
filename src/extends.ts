
type foo<T> = T

let myFoo:foo<string> = 'my foo'
let myBool:foo<boolean> = false

type StrFoo<T extends string> = T

let aa:StrFoo<string> = 'bbb'

type StrFooLetter<T extends string = 'AA'> = T
let AA:StrFooLetter = 'AA'
let BB:StrFooLetter<'BB'> = 'BB'

type EnumStr = 'aa'|'bb'
type TExtEnumStr<T extends EnumStr> = T
let tExt:TExtEnumStr<'aa'> = 'aa'
let tExt2: TExtEnumStr<'bb'> = 'bb'



type IsNumber<N> = N extends number ? 'yes, is a number' : 'no, not a number';

let num:IsNumber<2> = 'yes, is a number'
let num2:IsNumber<true> = 'no, not a number'

type num = 2
type result1 = IsNumber<num>;
type hello = 'hello'
type result2 = IsNumber<hello> 