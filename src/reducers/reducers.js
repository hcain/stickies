import {
  FETCH_ALL_USERS_SUCCESS,
  LOADING_TRUE,
  ERROR_RECEIVED
} from "../actions/actions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_USERS_SUCCESS:
      console.log(action.payload.users);
      return {
        ...state,
        loading: false,
        items: action.payload.users
      };

    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ERROR_RECEIVED:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
}
