import axios from "axios";

export const getAllTweets = () => {
  return axios.get('/api/tweets')
};

export const getUserTweets = id => {
  return axios.get(`/api/tweets/user/${id}`)
};

export const postTweet = data => {
  return axios.post('/api/tweets/', data)
};