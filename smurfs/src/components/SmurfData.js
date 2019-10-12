import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "./states/actionCreators";

export function Smurf({ formValues, changeInput, postSmurfs }) {
  const onValueChange = event => {
    changeInput(event.target);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    postSmurfs(formValues);
  };

  return (
    <form className="FormData" onSubmit={onFormSubmit}>
      <p>Enter villagers details below</p>
      <label>
        Name
        <input
          type='text'
          value={formValues.name}
          onChange={onValueChange}
          name="name"
          placeholder="Enter Name...."
        />
      </label>
      <br />

      <label>
        Height
        <input
          type='number'
          value={formValues.height}
          onChange={onValueChange}
          name="height"
          placeholder="Enter Height...."
        />
      </label>
      <br />

      <label>
        Age
        <input
          type='number'
          value={formValues.age}
          onChange={onValueChange}
          name="age"
          placeholder="Enter Age...."
        />
      </label>
      <br />
      <button>Submit</button>
      {/* <input type="submit" /> */}
    </form>
  );
}

export default connect(
  state => state,
  actionCreators
)(Smurf);