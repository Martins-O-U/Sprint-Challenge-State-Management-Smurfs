import * as types from "./types";

const initialState = {
    smurfs: [],
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
            }
        // case types.FORM_SUBMIT:
        //     return {
        //         ...state,
        //         smurfs: action.payload
        //     }
        default: 
        return state
    }
} 

export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FORM_SUBMIT:
            return {
                ...state,
                smurfs: action.payload
            }
        default: 
        return state
    }
} 