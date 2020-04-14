import React from 'react'
import Button, { ButtonType, ButtonSize } from '@com/Button/button'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      <Button className='asd' onClick={() => { window.alert(1) }}>Hello</Button>
      <Button disabled>default,disabled</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary,Large</Button>
      <Button btnType={ButtonType.Warning} size={ButtonSize.Small}>Warning,Small</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Danger,Small</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com' target='_blank'>百度</Button>
      <Button disabled btnType={ButtonType.Link} href='http://www.baidu.com' target='_blank'>百度</Button>
    </div>
  )
}

export default App
