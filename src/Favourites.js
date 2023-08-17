import { useState } from "react";
import "./Favourites.css";

export default function Favourites(props) {
  const { savedJokes, setSavedJokes } = props;
  const [checkedJokes, setCheckedJokes] = useState([]);
  const [newJoke, setNewJoke] = useState("");
  const [editingJoke, setEditingJoke] = useState("");

  const handleNewJokeChange = (event) => {
    setNewJoke(event.target.value);
  };

  const saveNewJoke = () => {
    if (newJoke.trim() !== "") {
      setSavedJokes((prevSavedJokes) => [...prevSavedJokes, newJoke]);
      setNewJoke("");
    }
  };

  const handleCheckboxChange = (index) => {
    if (checkedJokes.includes(index)) {
      setCheckedJokes((prevCheckedJokes) =>
        prevCheckedJokes.filter((item) => item !== index)
      );
    } else {
      setCheckedJokes((prevCheckedJokes) => [...prevCheckedJokes, index]);
    }
  };

  const handleRemoveSelected = () => {
    setSavedJokes((prevSavedJokes) =>
      prevSavedJokes.filter((item, index) => !checkedJokes.includes(index))
    );
    setCheckedJokes([]);
  };

  const handleRemoveAll = () => {
    setSavedJokes([]);
    setCheckedJokes([]);
  };

  const handleEditJoke = (index) => {
    setEditingJoke(index);
  };

  const handleEditingJokeChange = (event) => {
    const newSavedJokes = [...savedJokes];
    newSavedJokes[editingJoke] = event.target.value;
    setSavedJokes(newSavedJokes);
  };

  const handleSaveJoke = (index) => {
    setEditingJoke("");
  };

  return (
    <div className="Favourites">
      <h1>Dad Joke Depot: Saved Jokes</h1>
      <p>Save your favourite jokes here</p>
      <input
        type="text"
        value={newJoke}
        onChange={handleNewJokeChange}
        placeholder="Enter Dad Joke Here!"
      />

      <button className="save-button" onClick={saveNewJoke}>
        Save
      </button>
      {savedJokes.length > 0 && (
        <div>
          <ul className="noBullet">
            {savedJokes.map((joke, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={checkedJokes.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
                {editingJoke === index ? (
                  <>
                    <input
                      type="text"
                      value={joke}
                      onChange={handleEditingJokeChange}
                    />
                    <button onClick={() => handleSaveJoke(index)}>Save</button>
                  </>
                ) : (
                  <>
                    <span>{joke}</span>
                    <button className="edit" onClick={() => handleEditJoke(index)}>Edit</button>
                  </>
                )}
              </li>
            ))}
          </ul>
          <div className="button-container">
            <button onClick={handleRemoveSelected}>Remove Selected</button>
            <button onClick={handleRemoveAll}>Remove All</button>
          </div>
        </div>
      )}
    </div>
  );
}
