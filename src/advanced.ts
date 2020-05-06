///<reference path="../types/advanced.d.ts" />

let pluck:IPluck = function(o, names) {
  return names.map(n => o[n]);
}
let obj = { a: 1, b: '2', c: false };
pluck(obj, ['a','c']);

