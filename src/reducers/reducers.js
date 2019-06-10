import { combineReducers } from "redux";

import {
  FETCH_ALL_USERS_BEGIN,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE
} from "../actions/actions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

function allUsersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_ALL_USERS_SUCCESS:
      console.log(action.payload.users);
      return {
        ...state,
        loading: false,
        items: action.payload.users
      };

    case FETCH_ALL_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  allUsersReducer
});

export default rootReducer;
