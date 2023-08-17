import "./About.css";


export default function About() {
  return (
    <div className="About">
      <h1>Dad Joke Depot: About</h1>
      <div className="about-content">
        <p>
          This is a simple app that allows users to randomly generate one of
          5,000 'dad jokes' from an API.
          <br />
          <br />
          If the user likes the joke, they can save it to a list featured on
          another page within the app (called 'Saved') or simply generate a new
          joke to replace it.
          <br />
          <br />
          When the User navigates to the 'Saved' page, they are presented with a
          list of all the jokes they have saved from the previous page.
          <br />
          <br />
          The User can also upload their own joke to this page and edit both the
          randomly generated saved joke and their own if they so choose.
          <br />
          <br />
          If the user wishes to remove an individual joke, multiple jokes, or
          all the jokes from the list, there are options available that will
          allow them to do this. For example, there is a 'Remove Selected'
          button, and a 'Remove All' button.
          <br />
          <br />
          The following technologies were used to create this:
          <br />
          <li>HTML 5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>VS Code</li>
          <li>Google Fonts</li>
          <li>Excalidraw</li>
          <li>
            <strong>API:</strong>{" "}
            <a
              href="https://icanhazdadjoke.com/api#fetch-a-random-dad-joke"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
          </li>
          <br />
          <br />
          The 'Dad Joke Generator' is the second application I have build, in
          early April 2023. The design is simple and quite frankly, ugly.
          However, I have elected to keep it this way to show my progress when
          compared to later applications.
        </p>
      </div>
    </div>
  );
}
