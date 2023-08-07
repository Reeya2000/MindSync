import React, { Component } from "react";
import PropTypes from "prop-types";

class SongList extends Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.token !== "" &&
      !nextProps.fetchSongsError &&
      nextProps.fetchSongsPending &&
      nextProps.viewType === "songs"
    ) {
      this.props.fetchSongs(nextProps.token);
    }
  }

  renderSongs() {
    return this.props.songs.map((song, i) => {
      const buttonClass =
        song.track.id === this.props.songId && !this.props.songPaused
          ? "fa-pause-circle-o"
          : "fa-play-circle-o";

      return (
        <li
          className={
            song.track.id === this.props.songId
              ? "active user-song-item"
              : "user-song-item"
          }
          key={i}
        >
          <div
            onClick={() => {
              song.track.id === this.props.songId &&
              this.props.songPlaying &&
              this.props.songPaused
                ? this.props.resumeSong()
                : this.props.songPlaying &&
                  !this.props.songPaused &&
                  song.track.id === this.props.songId
                ? this.props.pauseSong()
                : this.props.audioControl(song);
            }}
            className="play-song"
          >
            <i className={`fa ${buttonClass} play-button`} aria-hidden="true" />
          </div>

          <div className="songlist-track">
            <p>{song.track.name}</p>
          </div>

          <div className="songlist-artist">
            <p>{song.track.artists[0].name}</p>
          </div>

          <div className="songlist-album">
            <p>{song.track.album.name}</p>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <br></br>

        <div className="songlist-header-container">
          <div className="songlist-track-header">
            <p>Track</p>
          </div>
          <div className="songlist-artist-header">
            <p>Artist</p>
          </div>
          <div className="songlist-album-header">
            <p>Album</p>
          </div>
        </div>
        {this.props.songs &&
          !this.props.fetchSongsPending &&
          !this.props.fetchPlaylistSongsPending &&
          this.renderSongs()}
      </div>
    );
  }
}

SongList.propTypes = {
  viewType: PropTypes.string,
  token: PropTypes.string,
  songAddedId: PropTypes.string,
  songId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  songs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fetchSongsError: PropTypes.bool,
  fetchSongsPending: PropTypes.bool,
  fetchPlaylistSongsPending: PropTypes.bool,
  fetchSongs: PropTypes.func,
  audioControl: PropTypes.func,
  songPaused: PropTypes.bool,
  songPlaying: PropTypes.bool,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
};

export default SongList;
