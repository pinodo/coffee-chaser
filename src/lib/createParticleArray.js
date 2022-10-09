import Rain from '../Particles/Rain'
import Weathers from './constants/weathers'

export default function createParticleArray(numberOfParticles, context, weather) {
  let constructor
  switch (weather) {
    case Weathers.RAIN:
      constructor = Rain
      break
    default:
      break
  }

  const particleArray = []
  for (let i = 0; i < numberOfParticles; i++) {
    particleArray.push(new constructor(context))
  }
  return particleArray
}
