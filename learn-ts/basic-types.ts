// 基础类型
let isDone: boolean = false

let age: number = 12
let binaryNumber: number = 0b1111 // 二进制

let fisrtName: string = 'asd'

let u: undefined = undefined

let n: null = null

let num: number = null || undefined // null 和 undefined 是任何类型的子集


// any 类型 指任意

let notSure: any = 4
notSure = '123'
console.log(notSure.name)
notSure.getName()


// 允许多个类型
let numOrStr: number | string = '123'
numOrStr = 123


// **************************************************************
// 数组
let arrOfNumbers: number[] = [1, 2]
// arrOfNumbers = ['1'] 不被允许
// arrOfNumbers.push('123') 不被允许
arrOfNumbers.push(1)


function test() {
  console.log(arguments) // arguments 类数组
}

// 元组
let user: [string, number] = ['123', 1]


