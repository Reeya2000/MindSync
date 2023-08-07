import React, { Component } from "react";
// import Swal from "sweetalert2";

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diagnosed: null,
      helpfulInStress: null,
      copingFrequency: "",
      vocalsPreference: "",
      mood: "",
      favoriteGenre: "",
      lyricsPreference: "",
      submitted: false, // Track whether the form is submitted
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
  }
  handleDiagnosedChange = (event) => {
    this.setState({ diagnosed: event.target.value });
  };

  handleHelpfulInStressChange = (event) => {
    this.setState({ helpfulInStress: event.target.value });
  };

  handleCopingFrequencyChange = (event) => {
    this.setState({ copingFrequency: event.target.value });
  };

  handleVocalsPreferenceChange = (event) => {
    this.setState({ vocalsPreference: event.target.value });
  };

  handleMoodChange = (event) => {
    this.setState({ mood: event.target.value });
  };

  handleFavoriteGenreChange = (event) => {
    this.setState({ favoriteGenre: event.target.value });
  };

  handleLyricsPreferenceChange = (event) => {
    this.setState({ lyricsPreference: event.target.value });
  };

  handleSubmit = () => {
    // Check if any question is unanswered
    if (
      this.state.diagnosed === null ||
      this.state.helpfulInStress === null ||
      this.state.copingFrequency === "" ||
      this.state.mood === "" ||
      this.state.favoriteGenre === ""
    ) {
      alert("Form incomplete. Please answer all questions.");

      return;
    }

    // Handle the submission of the questionnaire data
    // You can access the collected data using this.state properties
    // Implement your logic here
    // Set the 'submitted' state to true to display the success message
    this.setState({ submitted: true });
    // Swal.fire("Thank you!", "Form submitted!", "success").then(() =>
    this.handleBrowseClick();
    // );
  };
  handleBrowseClick() {
    const { updateHeaderTitle, updateViewType, fetchFeatured } = this.props;

    updateHeaderTitle("Recommended Playlist");
    updateViewType("Featured");
    fetchFeatured(localStorage.getItem("token"));
  }

  render() {
    // Dropdown options for "favoriteGenre" and "mood"
    const genreOptions = [
      "Pop",
      "Rock",
      "Hip-hop/Rap",
      "Classical",
      "Country",
      "Electronic/Dance",
      "R&B/Soul",
      "Jazz",
    ];
    // const lyricsOptions = ['Meaningful and introspective', 'Fun and light-hearted', 'Emotional and heartfelt', 'Energetic and motivational'];

    return (
      <div className="questionnaire-container">
        <h2>{this.props.headingText}</h2>
        {this.state.submitted ? (
          <p>Your response has been saved successfully!</p>
        ) : (
          <React.Fragment>
            <div>
              <br></br>
              <br></br>

              <label>1. Do you have a diagnosed mental health condition?</label>
              <br />
              <label>
                <input
                  type="radio"
                  name="diagnosed"
                  value="Yes"
                  checked={this.state.diagnosed === "Yes"}
                  onChange={this.handleDiagnosedChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="diagnosed"
                  value="No"
                  checked={this.state.diagnosed === "No"}
                  onChange={this.handleDiagnosedChange}
                />
                No
              </label>
            </div>
            <div>
              <br />
              <label>
                2. Do you find music helpful in managing stress or anxiety?
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="helpfulInStress"
                  value="Yes"
                  checked={this.state.helpfulInStress === "Yes"}
                  onChange={this.handleHelpfulInStressChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="helpfulInStress"
                  value="No"
                  checked={this.state.helpfulInStress === "No"}
                  onChange={this.handleHelpfulInStressChange}
                />
                No
              </label>
              <label>
                <input
                  type="radio"
                  name="helpfulInStress"
                  value="Sometimes"
                  checked={this.state.helpfulInStress === "Sometimes"}
                  onChange={this.handleHelpfulInStressChange}
                />
                Sometimes
              </label>
            </div>
            <div>
              <br />
              <label>
                3. How often do you listen to music as a coping mechanism?
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="copingFrequency"
                  value="Daily"
                  checked={this.state.copingFrequency === "Daily"}
                  onChange={this.handleCopingFrequencyChange}
                />
                Daily
              </label>
              <label>
                <input
                  type="radio"
                  name="copingFrequency"
                  value="Several times a week"
                  checked={
                    this.state.copingFrequency === "Several times a week"
                  }
                  onChange={this.handleCopingFrequencyChange}
                />
                Several times a week
              </label>
              <label>
                <input
                  type="radio"
                  name="copingFrequency"
                  value="Occasionally"
                  checked={this.state.copingFrequency === "Occasionally"}
                  onChange={this.handleCopingFrequencyChange}
                />
                Occasionally
              </label>
              <label>
                <input
                  type="radio"
                  name="copingFrequency"
                  value="Rarely"
                  checked={this.state.copingFrequency === "Rarely"}
                  onChange={this.handleCopingFrequencyChange}
                />
                Rarely
              </label>
              <label>
                <input
                  type="radio"
                  name="copingFrequency"
                  value="Never"
                  checked={this.state.copingFrequency === "Never"}
                  onChange={this.handleCopingFrequencyChange}
                />
                Never
              </label>
            </div>
            <div>
              <br />
            </div>
            {/* Rest of the questions with select dropdown */}
            <div>
              <br />
              <label>
                4. What kind of music do you listen to when you're feeling down?
              </label>
              <br />
              <select value={this.state.mood} onChange={this.handleMoodChange}>
                <option value="">Select Mood</option>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Chill/Relaxed">Chill/Relaxed</option>
                <option value="Energetic">Energetic</option>
                <option value="Stressed">Stressed</option>
              </select>
            </div>
            <div>
              <br />
              <label>5. Which genre of music do you enjoy the most?</label>
              <br />
              <select
                value={this.state.favoriteGenre}
                onChange={this.handleFavoriteGenreChange}
              >
                <option value="">Select Genre</option>
                {genreOptions.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <button onClick={this.handleSubmit}>Submit</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Questionnaire;
