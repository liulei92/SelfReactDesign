
// ***************************************************************
// interface 接口

// readonly  只读属性; ? 代表可选属性
interface IPerson {
  readonly id: number;
  name: string;
  age: number;
  country?: string;
}


let pingm: IPerson = {
  id: 1,
  name: 'pingm',
  age: 123,
  country: 'China' // 可选属性
}

// pingm.id = 2
