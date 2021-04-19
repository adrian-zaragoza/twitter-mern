  
import { connect } from 'react-redux';
import { fetchAllUserTweets } from '../../actions/tweet_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUserTweets: id => dispatch(fetchAllUserTweets(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);