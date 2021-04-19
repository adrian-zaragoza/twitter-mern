import { RECEIVE_TWEETS, RECEIVE_USER_TWEETS, RECEIVE_NEW_TWEET } from '../actions/tweet_actions';
  
  const TweetsReducer = (oldState = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch(action.type) {
      case RECEIVE_TWEETS:
        newState.all = action.tweets.data;
        return newState;
      case RECEIVE_USER_TWEETS:
        newState.user = action.tweets.data;
        return newState;
      case RECEIVE_NEW_TWEET:
        newState.new = action.tweet.data
        return newState;
      default:
        return oldState;
    }
  };
  
  export default TweetsReducer;