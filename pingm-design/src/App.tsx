import React from 'react'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App () {
  return (
    <div className='App'>
      <FontAwesomeIcon icon={faCoffee} size='2x' />
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

      <hr/>
      <Menu defaultIndex='0' mode='horizontal' onSelect={(index) => { alert(index) }}>
        <MenuItem>
        0
        </MenuItem>
        <MenuItem>
        1
        </MenuItem>
        <MenuItem disabled={true}>
        2
        </MenuItem>
        <SubMenu title='dropdown'>
          <MenuItem>
          dropdown1
          </MenuItem>
          <MenuItem>
          dropdown2
          </MenuItem>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default App
