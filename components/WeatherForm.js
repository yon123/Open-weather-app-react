import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 8px 4px;
  display: inline-block;
  border: 1px solid #fff;
  box-shadow: inset 2px 2px 3px #ddd;
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: rgb(66, 113, 244);
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  padding: 12px 10px;
`;

class WeatherForm extends React.Component {
  state = {
    city: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/forecast/${this.state.city}`);
  };

  handleFormChange = event => {
    const value = event.target.value;
    this.setState(() => {
      return {
        city: value
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="form-inline" onSubmit={this.handleFormSubmit}>
          <StyledInput
            className="form-control mr-sm-2"
            value={this.state.city}
            placeholder="enter your city here"
            onChange={this.handleFormChange}
          />
          <Button className="btn btn-outline-success my-2 my-sm-0">
            enter
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(WeatherForm);
