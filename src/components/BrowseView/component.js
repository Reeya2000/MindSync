import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BrowseView.css";

class BrowseView extends Component {
  state = {
    featuredPlaylists: [],
  };

  componentDidUpdate(prevProps) {
    const { view } = this.props;

    if (prevProps.view !== view && view && Array.isArray(view)) {
      // Shuffle the 'view' array to get a random order
      const shuffledPlaylists = [...view].sort(() => Math.random() - 0.5);
      // Select the first 1 playlist
      const selectedPlaylists = shuffledPlaylists.slice(0, 1);
      this.setState({ featuredPlaylists: selectedPlaylists });
    }
  }

  handlePlaylistClick = (item) => {
    const {
      addPlaylistItem,
      fetchPlaylistSongs,
      token,
      updateHeaderTitle,
    } = this.props;
    addPlaylistItem(item);
    fetchPlaylistSongs(item.owner.id, item.id, token);
    updateHeaderTitle(item.name);
  };

  render() {
    const { viewType } = this.props;
    const { featuredPlaylists } = this.state;

    return (
      <ul className="browse-view-container">
        {featuredPlaylists.map((item, i) => (
          <li
            onClick={
              viewType === "Featured"
                ? () => this.handlePlaylistClick(item)
                : null
            }
            className="category-item"
            key={i}
          >
            <div className="category-image">
              <img
                alt="category"
                src={item.icons ? item.icons[0].url : item.images[0].url}
              />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

BrowseView.propTypes = {
  view: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  viewType: PropTypes.string,
  token: PropTypes.string,
  fetchPlaylistSongs: PropTypes.func,
  updateHeaderTitle: PropTypes.func,
  addPlaylistItem: PropTypes.func,
};

export default BrowseView;
