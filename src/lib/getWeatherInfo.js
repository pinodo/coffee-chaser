import { useState } from "react"
import axios from "axios"
import useCurrentLocation from "./useCurrentLocation"

const getWeatherInfo = () => {
  const [data, setData] = useState()

  const { location } = useCurrentLocation()
  const lat = location?.latitude
  const lng = location?.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7abb5ef3fd250b9d88cab04bbe6b63d1`
  axios.get(url).then((res) => {
    setData(res.data)
  })
  return data
}

export default getWeatherInfo
