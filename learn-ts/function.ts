// function 函数申明
// function add (x: number, y: number, z: number = 10): number {
//   return x + y + z
// }

// let result = add(1, 2)

// 函数表达式
const add = function (x: number, y: number, z: number = 10): number {
  return x + y + z
}


// const add2: string = add 错误
const add2: (x: number, y: number, z?: number) => number = add // add 自动获得 函数的类型

// ts 推测 str 为string类型
let str = 'str'
// str = 123 不能将类型“123”分配给类型“string”。