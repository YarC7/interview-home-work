import { combineReducers } from "redux";


import getPosts from "./getPosts";
import getComments from "./getComments";

export default combineReducers({
    getPosts,
    getComments 
});
