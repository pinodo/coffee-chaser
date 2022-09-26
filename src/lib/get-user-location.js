export default function getUserLocation() {
  const successCallBack = (position) => {
    const crd = position.coords
    console.log('Your current position is:')
    console.log(`Latitude : ${crd.latitude}`)
    console.log(`Longitude: ${crd.longitude}`)
  }

  const errorCallBack = (error) => {
    console.log(error)
  }

  return navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack)
}
