import * as types from "./types";
import axios from "axios";

export function changeInput(target) {
  return {
    type: types.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value
    }
  };
}

export function addSmurf(data) {
  return {
    type: types.GET_SMURF,
    payload: data
  };
}

export const getSmurf = () => dispatch => {
  axios.get("http://localhost:3333/smurfs")
    .then(response => {
      const data = response.data;
      dispatch(addSmurf(data));
    })
    .catch(error => {
      console.log(error.message)
    });
};

export const getFormValue = event => {
  if (event.target.name === "age") {
    return {
      type: types.ON_INPUT_CHANGE,
      payload: { name: event.target.name, value: Number(event.target.value) }
    };
  }
  return {
    type: types.ON_INPUT_CHANGE,
    payload: { name: event.target.name, value: event.target.value }
  };
};

export const postSmurfs = smurf => dispatch => {
  const params = {
    name: smurf.name,
    age: smurf.age,
    height: smurf.height
  };
  axios.post("http://localhost:3333/smurfs", params)
    .then(res => {
      dispatch(getSmurf(res.data));
      dispatch({ type: types.ON_SUBMIT });
  });
};
