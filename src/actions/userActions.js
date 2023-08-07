export const fetchUserSuccess = (user) => ({
  type: 'FETCH_USER_SUCCESS',
  user
});

export const fetchUserError = () => ({
  type: 'FETCH_USER_ERROR'
});

export const fetchUser = (accessToken) => {
  return async (dispatch) => {
    try {
      const request = new Request('https://api.spotify.com/v1/me', {
        headers: new Headers({
          'Authorization': 'Bearer ' + accessToken
        })
      });

      const res = await fetch(request);

      // send user back to homepage if no token
      if (res.statusText === "Unauthorized") {
        window.location.href = './';
        return;
      }

      const data = await res.json();
      dispatch(fetchUserSuccess(data));
    } catch (err) {
      dispatch(fetchUserError(err));
    }
  };
};
