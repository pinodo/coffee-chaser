import React, { useRef, useEffect, useState } from 'react'
import createParticleArray from '../lib/createParticleArray'
import Weathers from '../lib/constants/weathers'

function Canvas(props) {
  const { weather } = props
  const canvasRef = useRef(null)
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')
  const numberOfParticles = 10
  const canvasWidth = window.innerWidth
  const canvasHeight = window.innerHeight

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const context = canvas.getContext('2d')

    switch (weather) {
      case Weathers.RAIN:
        setBackgroundColor('#D5E7F6')
        break
      case Weathers.SNOW:
        setBackgroundColor('#D0D1E1')
        break
      default:
        break
    }

    document.body.style.backgroundColor = backgroundColor

    const particleArray = createParticleArray(numberOfParticles, context, weather)

    function animate() {
      context.clearRect(0, 0, canvasWidth, canvasHeight)
      for (const element of particleArray) {
        element.update()
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [backgroundColor])

  return <canvas ref={canvasRef} {...props} />
}
export default Canvas
