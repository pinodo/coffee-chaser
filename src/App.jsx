import './App.css'
import getCurrentLocation from './lib/get-user-location'

function App() {
  const result = getCurrentLocation()
  return (<div>Coffee Chaser</div>)
}

export default App
