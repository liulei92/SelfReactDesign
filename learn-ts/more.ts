// 类型别名和类型断言


// type aliases 类型别名
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x + y
}

const sum2: (x: number, y: number) => number = sum
const sum3: PlusType = sum

// 联合类型
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}



// type assertion 类型断言，只是告知 代码可以执行，但并不是改变原值的类型，此外 不可以断言为联合类型之外的类型
function getLenth(input: string | number): number {
  // input.length

  // const str = input as String
  // if (str.length) {
  //   return str.length
  // } else {
  //   const number = input as Number
  //   return number.toString().length
  // }

  // 同上
  if ((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}


// jQuery