import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Login from "./components/Login";
import OAuths from "./components/oAuths";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ArtistPage from "./pages/artistPage";
import PlaylistPage from "./pages/playlistPage";
import ArtistPageSpotify from "./pages/artistPageSpotify";
import ArtistPageYoutube from "./pages/artistPageYoutube";

class App extends React.Component {
  state = { authOk: true };

  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Login path="/" exact />
          </Switch>
          <Switch>
              <OAuths path="/oauths" exact />
          </Switch>
          <Switch>
            <MainPage path="/main" exact/>
          </Switch>
          <Switch>
            <ArtistPage path="/artist/:id" exact/>
          </Switch>
          <Switch>
            <ArtistPageSpotify path="/spotifyArtist/:id" exact/>
          </Switch>
          <Switch>
            <ArtistPageYoutube path="/youtubeArtist/:id" exact/>
          </Switch>
          <Switch>
            <PlaylistPage path="/playlist/:id" exact/>
          </Switch>
        </Router>
      </div>
    );
  }

  setToken = (token) => {
    this.setState({
      token: token,
      authOk: true,
    });
  };
}

export default App;
