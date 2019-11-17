import React from "react";
import { connect } from "react-redux";
import avatar from "./images/bot.png";
import { stateChange } from "./redux/actions/action";
import Home from "./components/home";
import "./styles/app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleApp = this.toggleApp.bind(this);
  }

  toggleApp() {
    this.props.changeState("home");  // // trigger change of app state
  }

  render() {
    return (
      <div>
        {this.props.app_state === "closed" ? (
          <img
            className="logo"
            onClick={this.toggleApp}
            src={avatar}
            alt="avatar"
          />
        ) : (
          <Home />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    app_state: state.app_state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeState: new_state => dispatch(stateChange(new_state))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
