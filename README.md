
# P2: Group Project Challenge

#### Date, 2024/05/09

#### By *Group 1*
1. Jesse Langat
2. Liz Wachira
3. Denis Mugambi
4. Ken Kipkoech
5. Ronny Njoroge

#### Learning Goals
1. Build a React application from scratch
2. Apply your knowledge of components, props and state management
3. Incorporate client-side routing
4. Use data from an API
 

#### Introduction
Now that you've learned the fundamentals of React, it's time to practice and expand your skills by making a React project from scratch!

This assignment is open-ended when it comes to the actual content. You are free to create whatever you'd like, as long as it incorporates the requirements listed in these instructions.

#### Requirements
1. You must make a single page application (only one index.html file) using create-react-app.
2. Your app should use at least 5 components in a way that keeps your code well organized.
3. There should be at least 3 client-side routes using [React Router](https://v5.reactrouter.com/web/guides/quick-start). Be sure to include a nav bar or other UI element that allows users to navigate between routes. |

4. Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Use a form to make your post request, specifically a controlled form/component. Additionally, you may choose to incorporate data from an external API but it is not required.

- You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.
- Upon return of json from your POST request, a state update by a setState function is required!
 // in App:
 function addMovie(newMovie){
  setMovies([...movies, newMovie]) // Updating movies state.
 }

 //in Form
 const configObj = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({title: "Titanic"})
 }

 fetch('http://localhost:3000/movies', configObj)
  .then(res => res.json())
  .then(data => addMovie(data)) //THIS STATE UPDATE IS REQUIRED!!!
  // clear form

- Remember: responsibility for re-rendering the page to display the updated list of movies should belong to the addMovie function; depending on a subsequent action to load the new data is not best practice.

5. Add some styling: you're encouraged to write your CSS from scratch, either by using [styled components](https://styled-components.com/) or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like [React Bootstrap](https://react-bootstrap.github.io/), [Semantic UILinks](https://react.semantic-ui.com/), or [Material UI](https://material-ui.com/)) if you prefer.

#### Stretch Goals
As a user, I should be able to:
Once you have met the minimum requirements, feel free to explore! These are only the basic requirements — you're free to add on as much stuff as you'd like. For example, you may want to incorporate data from an external API. Check out this list of [APIsLinks](https://apilist.fun/) if you need some inspiration!

#### Setup
For this project, you will need two separate repositories: one for your frontend and one for your backend. This will make it easier to deploy your project later, should you choose to do so.

#### Front-End Setup
Use create-react-app to generate starter code for your project. Follow the instructions on the [create-react-app](https://create-react-app.dev/docs/getting-started)site to get started.

#### Back-End Setup
You can use this [json-server template](https://github.com/learn-co-curriculum/json-server-template) to an external site. to generate your backend code. Using this template will make it easier to deploy your backend later on.


# Deployed link
https://group-1-project-ftn04suk5-jessetfbs-projects.vercel.app/

## Installation Requirements
Git

### Installation instruction
clone the repo with this link git@github.com:jessetfb/Group-1-project.git


```

# Live Link


## Technologies used
Vercel
Github
Javascript
React
CSS
HTML
Tailwind

## Known Bugs
There are no known bugs at the moment


## Support and contact details
(https://github.com/Xgambino)
(https://github.com/Ybronny)
(https://github.com/wwachira)
(https://github.com/ken-kipkoec)
(https://github.com/jessetfb)
