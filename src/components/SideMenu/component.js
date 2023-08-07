import React from "react";
import PropTypes from "prop-types";

const SideMenu = ({
  updateHeaderTitle,
  updateViewType,
  fetchFeatured,
  fetchRecentlyPlayed,
  fetchSongs,

  fetchArtists,
  token,
  title,
  artistIds,
}) => {
  const handleClick = (name) => {
    updateHeaderTitle(name);
    updateViewType(name);
  };

  const handleQuestionnaireClick = () => {
    updateHeaderTitle("Questionnaire");
  };

  const handleAboutUsClick = () => {
    updateHeaderTitle("About Us"); // Update the header title to "About Us"
    updateViewType("About Us"); // Update the view type to "About Us"
  };

  // const handleRecommendedSongsClick = () => {
  //   updateHeaderTitle("Recommended Songs"); // Update the header title to "Recommended Songs"
  //   updateViewType("Recommended Songs"); // Update the view type to "Recommended Songs"
  // };

  const renderSideMenu = () => {
    const menu = [
      {
        name: "Recently Played",
        action: fetchRecentlyPlayed,
      },
      {
        name: "Songs",
        action: fetchSongs,
      },

      {
        name: "Artists",
        action: fetchArtists,
        getArtists: true,
      },
    ];

    return menu.map((item) => {
      return (
        <li
          key={item.name}
          className={
            title === item.name ? "active sideMenu-items" : "sideMenu-items"
          }
          onClick={() => {
            item.getArtists
              ? item.action(token, artistIds)
              : item.action(token);
            handleClick(item.name);
          }}
        >
          {item.name}
        </li>
      );
    });
  };

  return (
    <ul className="sideMenu-container">
      <br></br>
      <h3 className="sideMenu-library">Your Library</h3>
      <br></br>
      {renderSideMenu()}

      <br></br>
      <br></br>
      <br></br>

      <li
        onClick={handleQuestionnaireClick}
        className={
          title === "Questionnaire" ? "active sideMenu-items" : "sideMenu-items"
        }
      >
        Questionnaire
      </li>

      <li
        onClick={handleAboutUsClick}
        className={
          title === "About Us" ? "active sideMenu-items" : "sideMenu-items"
        }
      >
        About Us
      </li>
    </ul>
  );
};

SideMenu.propTypes = {
  updateHeaderTitle: PropTypes.func,
  updateViewType: PropTypes.func,
  fetchFeatured: PropTypes.func,
  fetchRecentlyPlayed: PropTypes.func,
  fetchSongs: PropTypes.func,

  fetchArtists: PropTypes.func,
  token: PropTypes.string,
  artistIds: PropTypes.string,
  title: PropTypes.string,
};

export default SideMenu;
