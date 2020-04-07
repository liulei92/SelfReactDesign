import React, { useState, useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(false)
  const likeRef = useRef(0) // useRef 会保证值是最新
  const inputRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)
  console.log(theme)
  const style = {
    color: theme.color,
    background: theme.background
  }

  useEffect(() => {
    document.title = `click like count ${like}`
    return () => {
      console.log('clean up')
    }
  }, [like])

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  })

  function handleAlertClick() {
    setTimeout(() => {
      console.log(likeRef.current, like)
    }, 3000)
  }

  return (
    <>
      <input type="text" ref={inputRef}/>
      <button style={style } onClick={() => {
        setLike(like + 1);
        likeRef.current ++
      }}>
        { like }
      </button>
      <button onClick={() => setOn(!on)}>
        { on ? 'on' : 'off' }
      </button>
      <button onClick={handleAlertClick}>123</button>
    </>
  )
}

export default LikeButton
