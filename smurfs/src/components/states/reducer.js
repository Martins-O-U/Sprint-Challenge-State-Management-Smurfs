import * as types from "./types";

const initialData = [];
export function getSmurfReducer(state = initialData, action) {
  switch (action.type) {
    case types.GET_SMURF:
      return action.payload;
    default:
      return state;
  }
}
const initialFormState = {
  name: "",
  age: "",
  height: ""
};

export function addSmurReducer(state = initialFormState, action) {
  switch (action.type) {
    case types.ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
}