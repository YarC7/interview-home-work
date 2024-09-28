import {  put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import { backendURL } from "../../../constants";
import axios from "axios";
export default function* getCommentsSaga() {
    yield takeEvery(actionType.GET_COMMENTS, fetchComments);
}
const fetchCommentsApi = (postId) => {
    return axios.get(`${backendURL}/comments`, {
      params: {
        postId: postId
      }
    });
  };
function* fetchComments(action) {
    try {
        const response = yield call(fetchCommentsApi, action.payload);
        const commentsResponse = response.data;
        yield put({ type: actionType.GOT_COMMENTS, payload: commentsResponse });
    } catch (err) {
        console.log(err);
    }
}