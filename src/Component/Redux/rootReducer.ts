// rootReducer.ts

import { combineReducers } from "redux";
import userReducer from "../VmInventory/reducer";
//import postReducer from "../Components/PostPage/postReducer";

const rootReducer = combineReducers({
  user: userReducer,
  //post: postReducer,
});

export default rootReducer;
