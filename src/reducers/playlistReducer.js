export const playlistReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PLAYLIST_MENU_SUCCESS":
      return {
        playlistMenu: action.playlists,
        playlists: action.playlists,
        fetchPlaylistError: false,
        ...state,
      };

    case "ADD_PLAYLIST_ITEM":
      return {
        ...state,
        playlists: [...state.playlists, action.playlist],
      };

    case "FETCH_PLAYLIST_MENU_ERROR":
      return {
        fetchPlaylistError: true,
        ...state,
      };

    default:
      return state;
  }
};

export default playlistReducer;
