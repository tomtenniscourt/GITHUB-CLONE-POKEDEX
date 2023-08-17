import { useState } from "react";

import Homepage from "./Homepage";
import Favourites from "./Favourites";
import AdditionalContent from "./AdditionalContent";
import About from "./About";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  const [savedJokes, setSavedJokes] = useState([]);

  return (
    <div className="App">
      <head>
      <title>Dad Joke Generator</title>
      </head>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage savedJokes={savedJokes} setSavedJokes={setSavedJokes} />
          }
        />
        <Route
          path="/Favourites"
          element={
            <Favourites savedJokes={savedJokes} setSavedJokes={setSavedJokes} />
          }
        />
        <Route
          path="/AdditionalContent"
          element={<AdditionalContent setSavedJokes={setSavedJokes} />}
        />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
