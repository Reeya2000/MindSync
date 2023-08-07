import AlbumList from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchArtistSongs } from "../../actions/artistActions";
import { updateHeaderTitle } from "../../actions/uiActions";

const mapStateToProps = state => {
  const artists = state.artistsReducer.artistList ? state.artistsReducer.artistList.artists : [];
  return {
    token: state.tokenReducer.token || "",
    artists: artists
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchArtistSongs,
      updateHeaderTitle
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
