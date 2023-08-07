import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setToken } from "../../actions/tokenActions";

const UserDetails = ({ displayName }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.map((name) => name[0]).join("");
  };

  const quotes = [
    "In the silence of our minds, music whispers the secrets of healing.",
    "When life gets loud, let music be your calm.",
    "Through music, we can rewrite the story of our emotions.",
    "Music has the power to heal the soul and lift the spirit.",
    "In music, we find solace for our troubled minds.",
    "Mental health is a journey, and music can be our guide.",
    "When words fail, music speaks.",
    "In the rhythm of life, find your own melody of healing.",
    "The art of music can mend the wounds that words cannot.",
    "Let the harmonies of music soothe your mind and heart.",
    "Play the song of self-compassion to heal your mind.",
    "Tune in to the frequency of positive thoughts with music.",
    "Music is the language of the heart, and therapy for the mind.",
    "Let music be your ally in the battle against mental struggles.",
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  return (
    <div className="user-initials-container" onClick={handleClick}>
      {showMessage ? (
        <div>
          <br />
          <p className="user-welcome">Welcome</p>
          <p className="user-display-name">{displayName}</p>
          {/* Add the thinking cloud container here */}
          <div className="thinking-cloud">
            <p>"{getRandomQuote()}"</p>
          </div>
        </div>
      ) : (
        <div className="user-circle">{getInitials(displayName)}</div>
      )}
    </div>
  );
};

UserDetails.propTypes = {
  displayName: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setToken }, dispatch);
};

export default connect(null, mapDispatchToProps)(UserDetails);
