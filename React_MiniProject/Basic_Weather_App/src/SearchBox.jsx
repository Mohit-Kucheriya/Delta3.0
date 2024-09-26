import "./SearchBox.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1d51eac063923cb65d9bca8466ecba32";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        name: jsonResponse.name,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        description: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="cityBox"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && <p>No Such place found in our API</p>}
      </form>
    </div>
  );
}
