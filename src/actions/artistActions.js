export const fetchArtistsSuccess = (artists) => ({
  type: "FETCH_ARTISTS_SUCCESS",
  artists,
});

export const fetchArtistsError = () => ({
  type: "FETCH_ARTISTS_ERROR",
});

export const fetchArtists = (accessToken, artistIds) => (dispatch) => {
  const request = new Request(
    `https://api.spotify.com/v1/artists?ids=${artistIds}`,
    {
      headers: new Headers({
        Authorization: "Bearer " + accessToken,
      }),
    }
  );

  fetch(request)
    .then((res) => res.json())
    .then((res) => {
      dispatch(fetchArtistsSuccess(res));
    })
    .catch((err) => {
      dispatch(fetchArtistsError(err));
    });
};

export const fetchArtistSongsSuccess = (songs) => ({
  type: "FETCH_ARTIST_SONGS_SUCCESS",
  songs,
});

export const fetchArtistSongsError = () => ({
  type: "FETCH_ARTIST_SONGS_ERROR",
});

export const fetchArtistSongs = (artistId, accessToken) => (dispatch) => {
  const request = new Request(
    `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`,
    {
      headers: new Headers({
        Authorization: "Bearer " + accessToken,
      }),
    }
  );

  fetch(request)
    .then((res) => {
      if (res.statusText === "Unauthorized") {
        window.location.href = "./";
      }
      return res.json();
    })
    .then((res) => {
      // map the response to match that returned from get song request
      res.items = res.tracks.map((item) => ({ track: item }));

      dispatch(fetchArtistSongsSuccess(res.items));
    })
    .catch((err) => {
      dispatch(fetchArtistSongsError(err));
    });
};

export const setArtistIds = (artistIds) => ({
  type: "SET_ARTIST_IDS",
  artistIds,
});
