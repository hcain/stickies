// Action Types
export const FIRST_ACTION = "FIRST_ACTION";
export const SECOND_ACTION = "SECOND_ACTION";

// Action Creators
export const firstAction = () => dispatch => {
  dispatch({
    type: FIRST_ACTION,
    payload: "result_of_first_action"
  });
};

export const secondAction = () => dispatch => {
  dispatch({
    type: SECOND_ACTION,
    payload: "result_of_second_action"
  });
};
