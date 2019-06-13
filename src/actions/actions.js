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
  return async (dispatch) => {
    // play loading animation
    dispatch(loadingTrue());
    try {
      const response = await fetch(`https://bh-interview.now.sh/users`);
      // catch errors not caught by fetch
      handleErrors(response);

      const users = await response.json();
      // add users to state
      dispatch(fetchAllUsersSuccess(users.data));
      return users.data;
    } catch (error) {
      // show error
      dispatch(errorReceived(error));
    }
  };
}

export function addSticky(sticky, id) {
  return async (dispatch) => {
    // play loading animation
    dispatch(loadingTrue());
    try {
      const response = await fetch(
        `https://bh-interview.now.sh/users/${id}/posts`,
        {
          method: "post",
          headers: {
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-type": "application/json"
          },
          body: JSON.stringify(sticky)
        }
      );
      handleErrors(response);

      const user = await response.json();
      // update state to include new post
      dispatch(fetchAllUsers());
      return user.data;
    } catch (error) {
      dispatch(errorReceived(error));
    }
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
