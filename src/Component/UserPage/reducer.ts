import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    UserActionTypes,
  } from "./action";
  
  interface User {
    // Define the type for the 'user' property in the state
    // Adjust this type according to your actual user data structure
    // For example: User[] if 'user' is an array of user objects
  }
  
  interface UserState {
    user: User[];
    loading: boolean;
    error: any; // Replace 'any' with the appropriate type for error if known
  }
  
  const initialState: UserState = {
    user: [],
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          user: action.userdata,
        };
  
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  