import './App.css'
import Canvas from './components/Canvas'
import Weathers from './lib/constants/weathers'

function App() {
  const weather = Weathers.SNOW
  return <Canvas weather={weather} />
}

export default App
