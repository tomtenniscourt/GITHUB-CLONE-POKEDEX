# Dad Joke Generator – ReadMe


## Description

This is a simple app that allows users to randomly generate one of 5,000 'dad jokes' from an API. If the user likes the joke, they can save it to a list featured on another page within the app (called 'Saved') or simply generate a new joke to replace it. When the User navigates to the 'Saved' page, they are presented with a list of all the jokes they have saved from the previous page. 

The User can also upload their own joke to this page and edit both the randomly generated saved joke and their own if they so choose. 

If the user wishes to remove an individual joke, multiple jokes, or all the jokes from the list, there are options available that will allow them to do this. For example, there is a 'Remove Selected' button, and a 'Remove All' button. 


## Deployment link
 
https://dad-joke-generator-phi.vercel.app/

## Timeframe & Working Team

The game was entirely worked on by me over approximately a week. Occasionally I would have a second pair of eyes look over certain sections to help debug and find where certain issues were, however this was minimal. 


## Technologies Used

The following technologies were used throughout the process:
-HTML 

-CSS 

-JavaScript 

-React

-Google Fonts 

-Excalidraw (for the wireframes) 

## API
https://icanhazdadjoke.com/api#fetch-a-random-dad-joke

## Brief

The following brief was given to me to work from:

**General**

-	Build a web application from scratch, without a starter codebase. Must be your own work.
-	Use React with create-react-app to build your application.
-	Plan your application using wireframes and user stories.
-	Craft a README.md file that explains your app to the world.
-	Deploy your app online, where the rest of the world can access it.


**Technical**
-	Select a Project Idea of your own. But the user must be able to:
-	Add a new item to a list
-	Mark the item as complete/favourite/(watch, read, listen) later/flag/etc
-	Edit an item from a list
-	Remove an item from a list
-	Clear/delete all items
-	Clear/delete only marked items
-	Fetch data from at least one 3rd party API using Axios or fetch.
-	Make frequent Git commits with descriptive messages, explaining your commit.
-	Use React Router to handle multiple pages/views.

**User Stories**

-	As a user, I should be able to generate a random joke

-	As a user, I should be able to save a joke I like to the 'Saved' page

-	As a user, I should be able to replace the generated joke with another one

-	As a user, I should be able to view my saved jokes on a separate page

-	As a user, I should be able to upload my own joke to the 'Saved' page list

-	As a user, I should not be able to upload a blank joke

-	As a user, I should be able to remove individual, several, or all jokes from the 'Saved' page


## Planning

I started by sketching out a basic wireframe using a very basic paint app, and then proceeded to create my vision using very basic HTML and CSS. My belief was that if I could see everything visualised on the screen, it would be easier to create the necessary JavaScript that would interact with everything. 

The wireframes for the two main pages can be seen below (Please Note, when I started, I was intending to have randomly generated facts, but came to the conclusion that jokes would be more interesting - hence why some of the labels in these images are incorrect):



**Wireframe Home Page**

![image](https://media.git.generalassemb.ly/user/48202/files/11565329-be5b-4376-b32f-c5a7ae587249)

**Wireframe Saved Page**

![image](https://media.git.generalassemb.ly/user/48202/files/466ef5c9-d861-400b-ac84-76a975d24622)





## Build/Code Process

The main approach I took for this game was to build out the static HTML and CSS on all the pages so I would be able to visualise everything on the screen.

File Structure
-	app.js: This is the entry point of the application. It sets up the main components, such as the navigation bar and routes, and manages the state for saved jokes.

-	Homepage.js: This file contains the component for the homepage of the application. It generates a random dad joke and allows users to save jokes to their favourites.

-	Favourites.js: This file contains the component for the favourites page. It displays the saved jokes and provides options to remove, edit, and add new jokes.

-	AdditionalContent.js and About.js: These files contain components for additional pages of the application, which can be accessed through the navigation bar.

-	NavBar.js: This file contains the component for the navigation bar, which allows users to navigate between different pages.

-	App.css, Homepage.css, and Favourites.css: These files contain the CSS styles for the respective components.


## How it works

-	The main entry point of the application is the App component in app.js. It sets up the navigation bar and routes using React Router.

-	The Homepage component generates a random dad joke by making a request to the "https://icanhazdadjoke.com/" API. Users can save the joke to their favourites.

-	The Favourites component displays the saved jokes and provides options to remove, edit, and add new jokes. Saved jokes are stored in the savedJokes state.

-	The NavBar component renders the navigation bar with links to different pages of the application.

-	Additional pages, such as AdditionalContent and About, are currently empty and will be populated in the future. 

-	CSS pages are then used to provide the visuals. 


**App.js**

This file serves as the entry point of the application. It imports necessary dependencies, components, and styles. The App component is exported as the default export.

-	The useState hook from React is imported to manage the state of the saved jokes.
-	The Routes and Route components from react-router-dom are imported to handle routing in the application.
-	The NavBar component is imported to render the navigation bar.
-	The Homepage, Favourites, AdditionalContent, and About components are imported as the pages of the application.
-	The CSS styles from App.css are imported to style the App component.

**The App Component**

-	Declares the savedJokes state variable and the setSavedJokes function using the useState hook. It initialises savedJokes as an empty array.
-	Renders the main structure of the application inside a <div> element with the class name "App".
-	Renders the NavBar component to display the navigation bar.
-	Sets up the routing for different pages using the Routes and Route components.

o	The <Route> components define the path and the corresponding component to render for each page.

o	The element prop of each <Route> component specifies the component to render when the path matches.

o	The path prop specifies the URL path to match for each page.

o	The element prop passes the savedJokes state and setSavedJokes function as props to the respective components.

-	The Homepage component is rendered when the path is /, passing the savedJokes state and setSavedJokes function as props.
-	The Favourites component is rendered when the path is /Favourites, passing the savedJokes state and setSavedJokes function as props.
-	The AdditionalContent component is rendered when the path is /AdditionalContent, passing only the setSavedJokes function as a prop.
-	The About component is rendered when the path is /About.

**Homepage.js**

This file contains the component responsible for rendering the homepage of the application. It displays a random dad joke and provides options to save jokes to the favourites page.

-	The useState hook is imported from React to manage the state of the joke.
-	The CSS styles from Homepage.css are imported to style the component.
-	The Homepage component is exported as the default export, accepting the savedJokes and setSavedJokes props.

**The Homepage Component**

-	Declares the joke state variable and the setJoke function using the useState hook. It initialises the joke as an empty string.
-	Defines the generateJoke function, which fetches a random dad joke from the "https://icanhazdadjoke.com/" API.

o	It makes a GET request to the API, specifying the "Accept: application/json" header to receive the response in JSON format.

o	The response is converted to JSON using the response.json() method.

o	The joke is extracted from the response data and stored in the joke state using the setJoke function.

-	Defines the saveJoke function, which adds the current joke to the savedJokes state.

o	It creates a new array by spreading the existing savedJokes array and adding the current joke.

o	The setSavedJokes function is called with the new array to update the state.

-	Renders the main structure of the homepage inside a <div> element with the class name "page".
-	Displays the page heading and introductory text.
-	Renders a button with the class name "jokeGenerator", which triggers the generateJoke function when clicked.
-	Checks if a joke exists (joke &&), and if so, renders the joke within a <div> element with the class name "joke-border".

o	The joke text is displayed inside a <p> element with the class name "jokeText".

o	Renders a button that calls the saveJoke function when clicked.

**Favourites.js**

This file contains the component responsible for rendering the favourites page of the application. It displays the saved jokes and provides options to remove, edit, and add new jokes.

-	The useState hook is imported from React to manage the state of various variables.
-	The CSS styles from Favourites.css are imported to style the component.
-	The Favourites component is exported as the default export, accepting the savedJokes and setSavedJokes props.

**The Favourites Component**

-	Receives the savedJokes and setSavedJokes props from the parent component.
-	Declares the checkedJokes state variable and the setCheckedJokes function using the useState hook. It initialises checkedJokes as an empty array.
-	Declares the newJoke state variable and the setNewJoke function using the useState hook. It initialises newJoke as an empty string.
-	Declares the editingJoke state variable and the setEditingJoke function using the useState hook. It initialises editingJoke as an empty string.
-	Defines the handleNewJokeChange function, which updates the newJoke state when the input field for adding a new joke changes.
-	Defines the saveNewJoke function, which adds the new joke to the savedJokes state.

o	It checks if the trimmed newJoke is not an empty string.

o	If it's not empty, it creates a new array by spreading the existing savedJokes array and adding the new joke.

o	The setSavedJokes function is called with the new array to update the state.

o	The newJoke state is reset to an empty string.

-	Defines the handleCheckboxChange function, which handles the selection or deselection of jokes using checkboxes.

o	It checks if the checkedJokes array already includes the index of the current joke.

o	If the index is already present, it filters out the index from the checkedJokes array.

o	If the index is not present, it adds the index to the checkedJokes array.

-	Defines the handleRemoveSelected function, which removes the selected jokes from the savedJokes state.

o	It filters out the jokes whose indices are included in the checkedJokes array.

o	The setSavedJokes function is called with the filtered array to update the state.

o	The checkedJokes state is reset to an empty array.

-	Defines the handleRemoveAll function, which removes all jokes from the savedJokes state.

o	The setSavedJokes function is called with an empty array to clear the state.

o	The checkedJokes state is reset to an empty array.

-	Defines the handleEditJoke function, which sets the editingJoke state to the index of the joke being edited.
-	Defines the handleEditingJokeChange function, which updates the value of the joke being edited in the savedJokes state.

o	It creates a new array by spreading the existing savedJokes array.

o	The new value is assigned to the element at the index editingJoke.

o	The setSavedJokes function is called with the new array to update the state.

-	Defines the handleSaveJoke function, which clears the editingJoke state, indicating that the joke editing is complete.
-	Renders the main structure of the favourites page inside a <div> element with the class name "Favourites".
-	Renders an input field for adding a new joke, with the handleNewJokeChange function handling the value change.
-	Renders a button with the class name "save-button", which triggers the saveNewJoke function when clicked.
-	Checks if there are any saved jokes (savedJokes.length > 0), and if so, renders them.

o	Iterates over the savedJokes array using the map function.

o	For each joke, it renders a list item with a checkbox, the joke text, and buttons for editing or deleting the joke.

o	The checked attribute of the checkbox is set based on whether the checkedJokes array includes the current index.

o	If the editingJoke state matches the current index, it renders an input field for editing the joke text and a button to save the changes.

o	If the editingJoke state does not match, it renders the joke text and a button to initiate editing.

-	Renders buttons to remove selected jokes (handleRemoveSelected) or remove all jokes (handleRemoveAll).



## Challenges and wins

I struggled very much with the saved page and its associated functions - however most challenging was probably getting the check boxes applied to each joke to listen to only their joke, and not the rest of the jokes. For example, for a while, every time I clicked on one check box, they would all get marked. Furthermore, when this issue was fixed, I was still unable to only delete the ones that had been marked. 

Adding sound bites were also very challenging. Both this and adding additional content such as another API will be attempted when I readdress this project.

I faced some difficulty with CSS styling as well.

Most of these challenges I managed to solve by going through old course notes, previous homeworks and exercises, and researching on websites such as W3, YouTube, GeeksForGeeks, and CodeBrainer. I was also able to draw on the experience of my classmates and tutors.

I was very pleased to achieve full CRUD (Create Update and Delete) as it was the first time I had ever achieved this in a project. 

## Key Learnings/Takeaways

Key learnings for me were how to effectively navigate across multiple pages, and import different css codes for different elements. These proved to be challenging at first, however I am now confident in importing different css codes for corresponding pages. 

**Bugs**

As mentioned previously, there was a case where I was unable to get the checkboxes to properly listen to the user interactions, and this persisted even after It appeared that I had solved the issues. Thankfully, it seems to be fixed for now. 

**Future Improvements**


I will want to include a second API function in one of the empty pages I have included in this app - such as generating random fun facts for the user. I will also include a copy of the ReadMe in the 'About' section once I am happy with the text.  




