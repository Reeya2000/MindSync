import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h2>About Us</h2>
        <br></br>
        <h3>Groove with MindSync - Your Melodic Journey to Inner Harmony!</h3>
      </div>
      <div className="about-us-content">
        <br></br>
        <br></br>
        <p>
          MindSync is about providing the users with a personalized music
          therapy experience for their well-being!
        </p>

        <p>How It Works:</p>
        <p>
          Enjoy seamless access to Spotify's library, where you can explore your
          favorite artists, Spotify recommended songs, and much more. But that's
          not all - dive deeper into a personalized musical journey by
          completing the questionnaire. This unique assessment delves into your
          musical preferences, enabling us to curate music recommendations
          customized for you.
        </p>
        <p>
          Join this incredible musical journey towards self-discovery, healing,
          and growth. Whether you're seeking relaxation, emotional release, or
          improved focus, MindSync offers the ultimate all-in-one solution.
        </p>
        <br></br>
        <br></br>
        <div className="cta-container">
          <a href="/" className="cta-btn">
            Explore Music
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
