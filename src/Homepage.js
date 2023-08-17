import { useState } from "react";
import "./Homepage.css";
import reportWebVitals from "./reportWebVitals";

export default function Homepage({ savedJokes, setSavedJokes }) {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
      })
      .catch((error) => console.log(error));
  };

  const saveJoke = () => {
    setSavedJokes([...savedJokes, joke]);
  };

  return (
    <div className="page">
      <h1>Tom's Dad Joke Generator</h1>
      <div className="hello">
        <p className="homepage-text" style={{ textAlign: "center" }}>
          Press the <span>BUTTON</span> below to randomly generate a
          thigh-slapping cracker straight to your screen.
          <br />
          <br />
          Like what you see? Save the joke to your Favourites list!
          <br />
          <br />
          Are you a dad? Upload your own jokes on the next page!
          <br />
          <br />
        </p>
      </div>
      <button className="jokeGenerator" onClick={generateJoke}>
        Joke Button
      </button>
      {joke && (
        <div className="joke-border">
          <p className="jokeText">{joke}</p>
          <button onClick={saveJoke}>Save</button>
        </div>
      )}
    </div>
  );
}
