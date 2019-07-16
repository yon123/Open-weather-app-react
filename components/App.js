import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import weatherApi from "./weatherApi";
import Homepage from "./Homepage";
import ForecastList from "./ForecastList";
import ForecastDay from "./ForecastDay";
import Header from "./Header";
import NotFound from "./NotFound";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  html {
    background: #fff;
  }
`;

class App extends React.Component {
  state = {
    city: "",
    forecast: []
  };
  getWeatherState = city => {
    weatherApi(city).then(result => {
      this.setState({
        city: city,
        forecast: result
      });
    });
  };
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route
              path="/forecast/:city/:day"
              render={props => (
                <ForecastDay
                  {...props}
                  city={this.state.city}
                  forecast={this.state.forecast}
                  updateWeatherState={this.updateWeatherState}
                />
              )}
            />
            <Route
              path="/forecast/:city"
              render={props => (
                <ForecastList
                  {...props}
                  city={this.state.city}
                  forecast={this.state.forecast}
                  getWeatherState={this.getWeatherState}
                />
              )}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
