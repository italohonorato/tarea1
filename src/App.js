import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./components/home/home.component";
import SignInSignup from "./components/signin-signup/signIn-signUp";
import "./App.css";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/font-awesome/scss/font-awesome.scss";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import { auth } from "./firebase/firebase";

class App extends Component {
  unsubscribeAuth = null;

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.setState({ currentUser: user });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          {/* <Route exact path={("/", "signinsignup")} component={SignInSignup} /> */}
          <Route path="/signinsignup" component={SignInSignup} />
          <Route path="/home" component={Home} />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
