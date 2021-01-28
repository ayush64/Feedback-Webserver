//import './App.css';
import React from "react";
import { connect } from "react-redux";
import * as actions from "../Actions/index";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import DashBoard from "./Dashboard";
import SurveyNew from './Surveys/SurveyNew';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={DashBoard} />
              <Route exact path="/surveys/new" component={SurveyNew} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
