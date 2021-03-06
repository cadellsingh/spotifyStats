# SpotoStats

- Web app for viewing your top tracks & artists as well as discovering new music on Spotify.

## Demo

- You can view it here [SpotoStats](https://spotostats.netlify.app/)

## Made With

- JavaScript ES6
- React
- React Router
- Styled Components
- And of course.... ☕️

## Installation

- Head over to [Spotify Dashboard](https://developer.spotify.com/dashboard/login)
- Add `http://localhost:3000/redirect` as the Redirect URI in settings

- Clone the repo

```
git clone https://github.com/cadellsingh/spotifyStats.git
```

- Change working directory

```
cd spotifyStats
```

- Create a `.env` file at the root of your project and set your environment variables

```
REACT_APP_CLIENT_ID=YOUR_CLIENT_ID
REACT_APP_REDIRECT_URL="http://localhost:3000/redirect"
REACT_APP_AUTH_URL="https://accounts.spotify.com/authorize"
```

- Install any dependencies

```
yarn install
```

- Run application

```
yarn start
```
