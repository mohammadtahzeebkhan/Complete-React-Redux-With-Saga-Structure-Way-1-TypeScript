import { all } from "redux-saga/effects";
import userSaga from "../UserPage/saga"; // Make sure to use the correct path to the userSaga file

// rootSaga is also a generator function
function* rootSaga() {
  yield all([
    // Here, in an array, we can add all sagas that need to be combined
    userSaga(),
    // Add other sagas if you have more
  ]);
}

export default rootSaga;
