import QuestionnaireView from "./Questionnaire";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchPlaylistSongs,
  addPlaylistItem
} from "../../actions/playlistActions";
import { updateHeaderTitle } from "../../actions/uiActions";
import { fetchFeatured } from '../../actions/browseActions';
import { updateViewType } from '../../actions/songActions';

const mapStateToProps = state => ({
  view: state.browseReducer.view,
  viewType: state.songsReducer.viewType,
  token: state.tokenReducer.token
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchPlaylistSongs,
    updateHeaderTitle,
    addPlaylistItem,
    fetchFeatured,
    updateViewType
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireView);