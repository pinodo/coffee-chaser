import axios from "axios";
import useCurrentLocation from "./useCurrentLocation";

const location = useCurrentLocation();
const url = `https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=7abb5ef3fd250b9d88cab04bbe6b63d1`;
const data = {};

function fetchingData() {
  axios.get(url).then((res) => {
    data = res.data;
  });
  console.log(data);
  return data;
}
