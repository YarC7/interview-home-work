import { GET_POSTS, GET_COMMENTS } from "./actiontypes";

export const getPosts = (data) => {
    return {
        type: GET_POSTS, payload: data
    };
};
export const getComments = (data) => {
    return {
        type: GET_COMMENTS, payload: data
    };
};
