import React from "react";
import PropTypes from "prop-types";
import "./MainHeader.css";

const MainHeader = ({
  fetchFeatured,
  updateHeaderTitle,
  updateViewType,
  headerTitle,
  viewType,
  playlists,
  token,
  artists,
}) => {
  let currentPlaylist;
  let currentArtist;

  if (viewType === "playlist") {
    currentPlaylist = playlists.filter((playlist) => {
      return playlist.name === headerTitle;
    })[0];
  }

  if (viewType === "Artist" && artists.length > 0) {
    currentArtist = artists.filter((artist) => {
      return artist.name === headerTitle;
    })[0];
  }

  return (
    <div className="playlist-title">
      {viewType === "playlist" && (
        <div className="playlist-header-container">
          <div className="playlist-image-container">
            <img
              alt="playlist"
              className="playlist-image"
              src={
                currentPlaylist.images[0] ? currentPlaylist.images[0].url : null
              }
            />
          </div>
          <div className="playlist-details-container">
            <p className="playlist-text">PLAYLIST</p>
            <h3 className="header-titles">{headerTitle}</h3>
          </div>
        </div>
      )}

      {viewType === "Artist" && currentArtist && (
        <div>
          <div className="artist-header-container">
            <img
              alt="current-artist"
              className="artist-image"
              src={currentArtist.images[0].url}
            />
            <div className="artist-header-name">
              <p>Artist from your Spotify</p>
              <h3>{currentArtist.name}</h3>
            </div>
          </div>
        </div>
      )}

      {(headerTitle === "Questionnaire" ||
        headerTitle === "Recently Played" ||
        headerTitle === "Artists") && (
        <div>
          <h3 className="header-titles">{headerTitle}</h3>
        </div>
      )}
      {headerTitle === "Songs" && (
        <div>
          <h3 className="header-titles">{headerTitle}</h3>
          <p className="recommendation-subscript">
            {" "}
            &nbsp;Recommended from Spotify
          </p>
        </div>
      )}
      {headerTitle === "Recommended Playlist" && (
        <div>
          <h3 className="header-titles">{headerTitle}</h3>
        </div>
      )}
    </div>
  );
};

MainHeader.propTypes = {
  fetchFeatured: PropTypes.func,
  updateHeaderTitle: PropTypes.func,
  updateViewType: PropTypes.func,
  headerTitle: PropTypes.string,
  viewType: PropTypes.string,
  playlists: PropTypes.array,
  playlistMenu: PropTypes.array,
  token: PropTypes.string,
  artists: PropTypes.array,
};

export default MainHeader;
