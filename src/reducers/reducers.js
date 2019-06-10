import { FIRST_ACTION, SECOND_ACTION } from "../actions/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case FIRST_ACTION:
      return {
        result: action.payload
      };
    case SECOND_ACTION:
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
