// 泛型 generics

// part1 <T>用来占位，使用函数会 实时传入确定的类型值
function echo<T> (arg: T): T {
  return arg
}

const t: string = 'str'
const result = echo(t)
const result1 = echo(123)

//
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])



// part2 使用 interface 对泛型进行约束
function echoWithArr<T> (arr: T[]): T[] {
  console.log(arr.length)
  return arr
}

const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength> (args: T): T {
  console.log(args.length)
  return args
}
console.log(echoWithLength('str'))
console.log(echoWithLength({ length: 10 }))
console.log(echoWithLength([]))


// part3  泛型用于其他
class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)

console.log(queue.pop().toFixed())


const queue2 = new Queue<string>()
queue2.push('123')
console.log(queue2.pop().length)

// 泛型用于 interface
interface KeyPair<T, U> {
  key: T;
  value: U
}

let kp1: KeyPair<number, string> = {
  key: 1,
  value: 'str'
}
let kp2: KeyPair<string, boolean> = {
  key: 'test',
  value: true
}

let arr: number[] = [1, 2]

let arrTwo: Array<number> = [1, 2, 3]

function plus(a: number, b: number): number {
  return a + b
}
function connect(a: string, b: string): string {
  return a + b
}

// const a = plus

interface IPlus<T> {
  (a: T, b: T): T
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect

