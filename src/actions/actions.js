// ACTION TYPES
export const LOADING_TRUE = "LOADING_TRUE";
export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const ERROR_RECEIVED = "ERROR_RECEIVED";

// ACTION CREATORS
export const loadingTrue = () => ({
  type: LOADING_TRUE
});

export const fetchAllUsersSuccess = (users) => ({
  type: FETCH_ALL_USERS_SUCCESS,
  payload: { users }
});

export const errorReceived = (error) => ({
  type: ERROR_RECEIVED,
  payload: { error }
});

// THUNKS
export function fetchAllUsers() {
  return (dispatch) => {
    dispatch(loadingTrue());
    return fetch(`https://bh-interview.now.sh/users`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((response) => {
        dispatch(fetchAllUsersSuccess(response.data));
        return response.data;
      })
      .catch((error) => dispatch(errorReceived(error)));
  };
}

export function addSticky(sticky, id) {
  return (dispatch) => {
    dispatch(loadingTrue());
    return fetch(`https://bh-interview.now.sh/users/${id}/posts`, {
      method: "post",
      headers: {
        // "Content-Type": "application/x-www-form-urlencoded"
        "Content-type": "application/json"
      },
      body: JSON.stringify(sticky)
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((response) => {
        dispatch(fetchAllUsers());
        return response.data;
      })
      .catch((error) => dispatch(errorReceived(error)));
  };
}

// HELPER FUNCTION
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
}
