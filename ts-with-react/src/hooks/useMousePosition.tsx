import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log(1)
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      document.removeEventListener('click', updateMouse)
    }
  }, [])

  return position
}

export default useMousePosition
