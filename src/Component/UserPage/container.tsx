import { connect } from "react-redux";
import { fetchUserRequest, UserRequestData } from "./action"; // Import UserRequestData type from actions
import { useEffect } from "react";
import Component from "./component";
interface UserContainerProps {
  fetchUserRequest: (data: UserRequestData) => void;
  props:any
  // Add other props if necessary
}

const UserContainer: React.FC<any> = (props) => {
  console.log("UserContainer props", props);

  const handleResponse = (res: any) => {
    console.log("handleResponse", res);
  };

  const handleError = (error: any) => {
    console.log("handleError", error);
  };

  useEffect(() => {
    // Make object to pass to the function as a single object
    // Declare types for 'handleError' and 'handleResponse' if needed
    const requestData: UserRequestData = {
      url: "/10",
      method: "GET",
      handleError,
      handleResponse,
    };

    // Call the action creator with the requestData object
    props.fetchUserRequest(requestData);
  }, []);

  console.log("UserContainer props", props);
  return (
    <>
      <h1>hello i m user container.js  TYPE_SCRIPT</h1>
      <Component/>
    </>
  );
};

const mapStateToProps = (state: any) => {
  // Define state types if possible, otherwise use 'any'
  return state;
};

const mapDispatchToProps = {
  fetchUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
