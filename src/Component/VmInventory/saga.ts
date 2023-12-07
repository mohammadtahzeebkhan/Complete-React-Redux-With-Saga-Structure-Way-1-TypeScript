// VM_INVENTORYaga.ts

import { call, put, takeLatest } from 'redux-saga/effects';
import axios ,{AxiosRequestConfig}from 'axios';
import { SagaIterator } from 'redux-saga'; 
import {
  FETCH_VM_INVENTORY_REQUEST,
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
/* const callApi = async (url: string, method: string): Promise<ApiResponseData> => {
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
 */

interface ApiResponseData {
  // Define your expected response data structure
  method:any
}
const callApi = async (url: string,method?: string,headers?: Record<string, string>,payload?: Record<string, any>):Promise<ApiResponseData> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      headers:headers,
      data: payload, // Include payload in the request if provided
      // Add any other necessary options here
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Define the saga function for fetching users
/* function* fetchUserSaga(action: any) {
    //function* fetchUserSaga(action: UserActionTypes) {

  try {
    console.log("fetchUserSaga",action);
    const requestData: UserRequestData = action.data;
    const url = `https://api-stage.daalchini.co.in${requestData.url}`;
    const response: ApiResponseData = yield call(callApi, url, requestData.method,requestData.header,requestData.payload);
    
    console.log("userData",response)
    // Dispatch a success action with the received data
    yield put(fetchUserSuccess(response));
    requestData.handleResponse(response)

    // Optionally, you can call the handleResponse function from the action payload
    if (requestData.handleResponse) {
      requestData.handleResponse(response.users);
    }
  } catch (error:any) {
    // Dispatch a failure action if an error occurs
    yield put(fetchUserFailure(error.message));
  }
} */

interface FetchUserSagaAction {
  type: string; // Assuming your action has a 'type' property
  data: UserRequestData;
}

// Assuming the 'callApi' function returns a Promise<ApiResponseData>
interface CallApiFunction {
  (url: string, method: string, header?: any, payload?: any): Promise<ApiResponseData>;
}

export function* fetchUserSaga(action: FetchUserSagaAction): SagaIterator {
  try {
    const requestData: UserRequestData = action.data;
    const url = `https://api-stage.daalchini.co.in${requestData.url}`;
    const response: ApiResponseData = yield call(callApi as CallApiFunction, url, requestData.method, requestData.header, requestData.payload);

    // Dispatch a success action with the received data
     requestData.handleResponse(response)
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
  yield takeLatest(FETCH_VM_INVENTORY_REQUEST, fetchUserSaga);
}

export default userSaga;
