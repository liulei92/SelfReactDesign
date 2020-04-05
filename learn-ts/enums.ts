// 枚举

// 数字枚举 默认从 0 开始。若添加初始值，则递增
enum Direction {
  // Up,
  Up = 10,
  Down,
  Left,
  right
}
// 映射关系
console.log(Direction.Up)
console.log(Direction[10])



// 字符串枚举
enum Actions {
  Open = 'open',
  Close = 'close'
}

console.log(Actions.Open)
if (Actions.Open === 'open') {
  console.log('just opened')
}


// 常量枚举，智慧处理 实际使用的参数部分，不会构建完整的逻辑
const enum Test {
  a = '1',
  b = '2'
}

console.log(Test.a)
