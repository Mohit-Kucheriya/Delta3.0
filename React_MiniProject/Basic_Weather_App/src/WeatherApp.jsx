import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherAppInfo, setWeatherAppInfo] = useState({
    description: "overcast clouds",
    feels_like: 31.23,
    humidity: 82,
    name: "Pune",
    temp: 27.54,
    temp_max: 27.54,
    temp_min: 27.54,
  });

let updateInfo = (result)=>{
    setWeatherAppInfo(result)
}

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather by Delta Student</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherAppInfo} />
    </div>
  );
}
