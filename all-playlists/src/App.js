import React from "react";
import "./App.css";
import OAuths from "./components/oAuths";

class App extends React.Component {
  state = { authOk: true };
 
  render() {
    return (
      <div>
        <OAuths />
      </div>
    );
  }

  setToken = (token) => {
    this.setState({
      token: token,
      authOk: true,
    })
  }
}

export default App;
