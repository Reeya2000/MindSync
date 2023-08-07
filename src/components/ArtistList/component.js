import React from "react";
import PropTypes from "prop-types";

const ArtistList = ({
  artists,
  fetchArtistSongs,
  token,
  updateHeaderTitle,
}) => {
  const renderArtists = () => {
    return artists.map((artist, i) => {
      const artistSongsAction = () => {
        fetchArtistSongs(artist.id, token);
        updateHeaderTitle(artist.name);
      };

      return (
        <li onClick={artistSongsAction} className="artist-name" key={i}>
          <a>
            <div>
              <div className="artist-image">
                <img
                  alt="artist"
                  src={artist.images[0] ? artist.images[0].url : ""}
                />
              </div>

              <p>{artist.name}</p>
            </div>
          </a>
        </li>
      );
    });
  };

  return (
    <ul className="artist-container">
      {artists && artists.length > 0 && renderArtists()}
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object),
  fetchArtistSongs: PropTypes.func,
  token: PropTypes.string,
  updateHeaderTitle: PropTypes.func,
};

export default ArtistList;
