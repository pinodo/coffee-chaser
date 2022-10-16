import { useEffect, useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'
import Weathers from './lib/constants/weathers'
import useWeatherInfo from './lib/useWeatherInfo'

function App() {
  const [tmpWeather, setWeather] = useState()
  const weather = Weathers.SNOW

  useEffect(() => {
    async function getWeatherInfo() {
      await useWeatherInfo().then((res) => { setWeather(res.data) })
      console.log("tmpWeather:", tmpWeather)
    }
    getWeatherInfo()
  }, [])

  return <Canvas weather={weather} />
}

export default App
