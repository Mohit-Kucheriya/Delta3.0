import { useEffect, useState } from "react";

export default function Joker() {
  const [joke, setJoke] = useState({});

  const url = "https://official-joke-api.appspot.com/random_joke";

  let getNewJoke = async () => {
    let response = await fetch(url);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(url);
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h3>Joker!</h3>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <button onClick={getNewJoke}>Get Random Joke</button>
    </div>
  );
}
