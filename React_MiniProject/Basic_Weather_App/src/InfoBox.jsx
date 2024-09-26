import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const RAINY_URL = "https://images.unsplash.com/photo-1605035015406-54c130d0bf89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL = "https://images.unsplash.com/photo-1566313891923-24df87b1b29f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const COLD_URL = "https://images.unsplash.com/photo-1454692173233-f4f34c12adad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  const IMG_URL =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity >= 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.name} {info.humidity >= 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Max Temperature = {info.temp_max}&deg;C</p>
              <p>Min Temperature = {info.temp_min}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>
                The weather can be describes as{" "}
                <i>{info.description}</i> and feels like{" "}
                {info.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
