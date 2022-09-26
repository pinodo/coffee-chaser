import './App.css'
import getGeoLocation from './lib/get-user-location'

function App() {
  const location = getGeoLocation()
  return (
    <div>Coffee Chaser</div>
  )
}

export default App
