import { put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import { backendURL } from "../../../constants";
import axios from "axios";
export default function* getPostsSaga() {
  yield takeEvery(actionType.GET_POSTS, fetchPosts);
}
const fetchPostsApi = (q) => {
  return axios.get(`${backendURL}/posts`, {
    params: {
      q: q,
    },
  });
};
function* fetchPosts(action) {
  try {
    console.log(action);
    const response = yield call(fetchPostsApi, action.payload);
    const postsResponse = response.data;
    yield put({ type: actionType.GOT_POSTS, payload: postsResponse });
  } catch (err) {
    console.log(err);
  }
}
