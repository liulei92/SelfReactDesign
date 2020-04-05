// 类
// ************************ 修饰符 public 公有属性， private 私有属性自由自己使用， protected 受保护的属性，可以在子类中 被使用，readonly 只读
class Animal {
  public name: string;
  private age: number;
  protected asd: boolean;
  readonly hei: string;


  // 静态属性
  static categoies: string[] = ['mammal', 'bird']
  // 静态方法
  static isAnimal(child) {
    return child instanceof Animal
  }

  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running!`
  }
}

console.log(Animal.categoies)

// 实例化
const panda = new Animal('YuanYuan')
let str1: string = ''
str1 = panda.run()
console.log(str1)
console.log(panda.name)
panda.name = 'sex'
// console.log(panda.age) 属性“age”为私有属性，只能在类“Animal”中访问
// console.log(panda.asd) 属性“age”为私有属性，只能在类“Animal”中访问

console.log(Animal.isAnimal(panda))

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
    console.log(this.name, this.asd) // protected 可以访问
  }

  run() {
    return `Meow, ` + super.run()
  }
}

const hh = new Cat('nnn')
console.log(hh.run())


// -------------- 提取公共为interface，用implements 抽象类的属性和方法
interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatterStatus();
}

interface RadioWithBattery extends Radio {
  checkBatterStatus();
}

class Car implements Radio {
  switchRadio() {}
}

// class Cellphone implements Radio, Battery {
//   switchRadio() {}
//   checkBatterStatus() {}
// }

// 同上
class Cellphone implements RadioWithBattery {
  switchRadio() { }
  checkBatterStatus() { }
}