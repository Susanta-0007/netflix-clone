<br/>
<p align="center">
  <a href="https://github.com/Susanta-0007/netflix-clone">
    <img src="https://cdn-icons-png.flaticon.com/128/1567/1567230.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Netflix Clone</h3>

  <p align="center">
    An fronted project build in React JS ,Tailwind CSS , Redux and TMDB API .
    <br/>
    <br/>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/Susanta-0007/netflix-clone/total) ![Contributors](https://img.shields.io/github/contributors/Susanta-0007/netflix-clone?color=dark-green) ![Forks](https://img.shields.io/github/forks/Susanta-0007/netflix-clone?style=social) ![Stargazers](https://img.shields.io/github/stars/Susanta-0007/netflix-clone?style=social) ![Issues](https://img.shields.io/github/issues/Susanta-0007/netflix-clone) ![License](https://img.shields.io/github/license/Susanta-0007/netflix-clone)

## Table Of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](https://cdn-icons-png.flaticon.com/128/1567/1567230.png)

The project utilizes a tech stack featuring React.js, Tailwind CSS, and Redux to develop a Netflix clone app. The app allows users to explore and search for movies, view detailed information, and potentially stream content. Additionally, a movie suggestion bot is implemented using the OpenAI API, providing personalized movie recommendations based on user input. The chosen technologies facilitate a responsive and visually appealing user interface, efficient state management, and seamless integration of external APIs.

## Built With

👨🏻‍💻Tech Stack Used :
🌟 Frontend : React and Tailwind
🌟 State Management : Redux
🌟 API - TMDB API

- [React Js](https://legacy.reactjs.org/ta)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux ](https://redux.js.org/)
- [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started)

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Get a free TMDB API Key at [TMDB API](https://developer.themoviedb.org/) and Open AI API Key at [OPEN AI](https://platform.openai.com/)

2. Clone the repo

```sh
git clone https://github.com/Susanta-0007/netflix-clone.git
```

3. Install NPM packages

```sh
npm install
```

4. Enter your API in `.env file`

```JS
const  REACT_APP_OPENAI_KEY= 'ENTER YOUR API';
const  REACT_APP_TMDB_API_KEY= 'ENTER YOUR API';

```

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

## Roadmap

✅Create React App
✅Configured TailwindCSS
✅Header
✅Routing of App
✅Login Form
✅Sign up Form
✅Form Validation
✅useRef Hook
✅Firebase Setup
✅Deploying our app to production
✅Create SignUp User Account
✅Implement Sign In user Api
✅Created Redux Store with userSlice
✅Implemented Sign out
👉Update Profile
👉BugFix: Sign up user displayName and profile picture update
👉BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
👉Unsubscibed to the onAuthStateChanged callback
👉Add hardcoded values to the constants file
👉Regiter TMDB API & create an app & get access token
👉Get Data from TMDB now playing movies list API
👉Custom Hook for Now Playing Movies
👉Create movieSlice
👉Update Store with movies Data
👉Planning for MainContauiner & secondary container
👉Fetch Data for Trailer Video
👉Update Store with Trailer Video Data
👉Embedded the Yotube video and make it autoplay and mute
👉Tailwind Classes to make Main Container look awesome
👉Build Secondary Component
👉Build Movie List
👉build Movie Card
👉TMDB Image CDN URL
👉Made the Browsre page amazing with Tailwind CSS
👉usePopularMovies Custom hook
👉GPT Search Page
👉GPT Search Bar
(👉BONUS) Multi-language Feature in our App)
👉Get Open AI Api Key
👉Gpt Search API Call
👉fetched gptMoviesSuggestions from TMDB
👉created gptSlice added data
👉Resused Movie List component to make movie suggestion container
👉Memoization
👉Added .env file
👉Adding .env file to gitignore
👉Made our Site Responsive

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/Susanta-0007/netflix-clone/issues/new) to discuss it, or directly create a pull request after you edit the _README.md_ file with necessary changes.
- Please make sure you check your spelling and grammar.
- Create individual PR for each suggestion.
- Please also read through the [Code Of Conduct](https://github.com/Susanta-0007/netflix-clone/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/Susanta-0007/netflix-clone/blob/main/LICENSE.md) for more information.

## Authors

- **Susanta Gorai** - _Full Stack Developer_ - [Susanta Gorai](https://github.com/Susanta-0007) - _Building from scratch_
