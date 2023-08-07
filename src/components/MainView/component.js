import React from "react";
import PropTypes from "prop-types";
import SongList from "../SongList";
import ArtistList from "../ArtistList";
import BrowseView from "../BrowseView";
import Questionnaire from "../Questionnaire";
import AboutUs from "../AboutUs/component";

const MainView = ({ headerTitle, audioControl, resumeSong, pauseSong }) => {
  return (
    <React.Fragment>
      {/* Conditionally render the components based on headerTitle */}
      {headerTitle === "Artists" ? (
        <ArtistList />
      ) : headerTitle === "Recommended Playlist" ? (
        <BrowseView />
      ) : headerTitle === "Questionnaire" ? ( // Display Questionnaire when headerTitle is "Questionnaire"
        <Questionnaire />
      ) : headerTitle === "About Us" ? ( // Display AboutUs when headerTitle is "About Us"
        <AboutUs />
      ) : (
        // By default, show SongList
        <SongList
          resumeSong={resumeSong}
          pauseSong={pauseSong}
          audioControl={audioControl}
        />
      )}
    </React.Fragment>
  );
};

MainView.propTypes = {
  headerTitle: PropTypes.string,
  audioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func,
};

export default MainView;
