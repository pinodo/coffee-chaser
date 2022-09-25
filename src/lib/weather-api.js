import React, { useState } from "react";
import axios from "axios";

export default function FetchingData() {
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=7abb5ef3fd250b9d88cab04bbe6b63d1`;

  axios.get(url).then((res) => {
    setData(res.data);
  });
}
