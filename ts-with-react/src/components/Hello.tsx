import React, { useContext } from 'react'
import { ThemeContext } from '../App'

interface IHelloProps {
  message?: string;
}

// React.FunctionComponent === React.FC（是FunctionComponent的类型别名） interface 描述函数
const Hello: React.FC<IHelloProps> = (props) => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  const style = {
    color: theme.color,
    background: theme.background
  }

  return <h2 style={style}>hello {props.message}</h2>
}

// 利用 React.FC 修饰 Hello 使其获得 defaultProps 等静态属性
Hello.defaultProps = {
  message: '小强'
}

export default Hello
