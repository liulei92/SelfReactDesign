import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useUrlLoader from './hooks//useUrlLoader'

interface IDogProps {
  status: string;
  message: string;
}
// const dogShow: React.FC<{ data: IDogProps }> = ({ data }) => {
//   return (
//     <>
//       <h2>{ data.status }</h2>
//       <img src={data.message} alt=""/>
//     </>
//   )
// }

interface IThemeProps {
  [key: string]: { color: string; background: string }
}
const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.light)


function App() {
  const [show, setShow] = useState(false)
  const position = useMousePosition()
  const [data, loading] = useUrlLoader('https://dog.ceo/api/breds/image', [show])
  const dogResult = data as IDogProps

  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>x: {position.x}, y: {position.y}</div>

          {loading ? 'loading...' : <img src={dogResult && dogResult.message} alt='dog' />}

          <Hello message='世界' />
          <LikeButton />
          <button onClick={() => setShow(!show)}>toggle tracker</button>
          {show && <MouseTracker />}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
