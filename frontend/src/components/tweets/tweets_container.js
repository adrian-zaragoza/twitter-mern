import { connect } from 'react-redux';
import { fetchAllTweets } from '../../actions/tweet_actions';
import Tweets from './tweets';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllTweets: () => dispatch(fetchAllTweets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);