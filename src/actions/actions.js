// ACTION TYPES
export const FETCH_ALL_USERS_BEGIN = "FETCH_ALL_USERS_BEGIN";
export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_ALL_USERS_FAILURE = "FETCH_ALL_USERS_FAILURE";

// ACTION CREATORS
export const fetchAllUsersBegin = () => ({
  type: FETCH_ALL_USERS_BEGIN
});

export const fetchAllUsersSuccess = (users) => ({
  type: FETCH_ALL_USERS_SUCCESS,
  payload: { users }
});

export const fetchAllUsersFailure = (error) => ({
  type: FETCH_ALL_USERS_FAILURE,
  payload: { error }
});

// THUNKS
export function fetchAllUsers() {
  return (dispatch) => {
    dispatch(fetchAllUsersBegin());
    return fetch(`https://bh-interview.now.sh/users`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((response) => {
        dispatch(fetchAllUsersSuccess(response.data));
        return response.data;
      })
      .catch((error) => dispatch(fetchAllUsersFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.status /* statusText */);
  }
  return response;
}
