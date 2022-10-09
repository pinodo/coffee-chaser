import Rain from '../Particles/Rain'
import Snow from '../Particles/Snow'
import Weathers from './constants/weathers'

export default function createParticleArray(numberOfParticles, context, weather) {
  let constructor
  switch (weather) {
    case Weathers.RAIN:
      constructor = Rain
      break
    case Weathers.SNOW:
      constructor = Snow
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
