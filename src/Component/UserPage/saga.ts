// userSaga.ts

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  fetchUserSuccess,
  fetchUserFailure,
  UserActionTypes,
  User,
  UserRequestData,
} from './action';

// Define the response data type you expect from the API
interface ApiResponseData {
  users: any; // Adjust this according to your actual API response structure
}

// Define the function that makes the API call
const callApi = async (url: string, method: string): Promise<ApiResponseData> => {
  try {
    const response = await axios({
      method,
      url,
      // Add any necessary data or headers here
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Define the saga function for fetching users
function* fetchUserSaga(action: any) {
    //function* fetchUserSaga(action: UserActionTypes) {
  try {
    const requestData: UserRequestData = action.data;
    const url = `https://jsonplaceholder.typicode.com/users${requestData.url}`;
    const response: ApiResponseData = yield call(callApi, url, requestData.method);

    console.log("userData",response)
    // Dispatch a success action with the received data
    yield put(fetchUserSuccess(response));

    // Optionally, you can call the handleResponse function from the action payload
    if (requestData.handleResponse) {
      requestData.handleResponse(response.users);
    }
  } catch (error:any) {
    // Dispatch a failure action if an error occurs
    yield put(fetchUserFailure(error.message));
  }
}

// Define the root saga
function* userSaga() {
  // Start the fetchUserSaga when FETCH_USERS_REQUEST action is dispatched
  yield takeLatest(FETCH_USERS_REQUEST, fetchUserSaga);
}

export default userSaga;
