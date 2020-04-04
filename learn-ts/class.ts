// 类

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running!`
  }
}

// 实例化
const panda = new Animal('YuanYuan')
let str1: string = ''
str1 = panda.run()
console.log(str1)


// 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const taidi = new Dog('huahua')
console.log(taidi.run())
console.log(taidi.bark())

// 复写
class Cat extends Animal {
  constructor(props) {
    super(props) // 继承父类
    console.log(this.name)
  }

  run() {
    return `Meow, ` + super.run()
  }
}

const hh = new Cat('nnn')
console.log(hh.run())