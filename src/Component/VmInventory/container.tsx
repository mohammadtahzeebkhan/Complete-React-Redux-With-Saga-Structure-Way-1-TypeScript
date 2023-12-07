import { connect } from "react-redux";
import { fetchUserRequest, UserRequestData } from "./action"; // Import UserRequestData type from actions
import { useEffect,useState } from "react";
import Component from "./component";

interface UserData {
  id: number;
  username: string;
  email: string;
  // Add other user-related properties as needed
}

interface DispatchProps {
  fetchUserRequest: (data: UserRequestData) => void;
  
  // Add other action dispatch functions if needed
}

interface UserState {
  userData: UserData | null;
  loading: boolean;
  error: string | null;
}

interface UserContainerProps extends UserState, DispatchProps {}

const UserContainer: React.FC<UserContainerProps> = (props) => {
  console.log("props:any",)
  const [inventoryList, setInventoryList] = useState<any[]>([]);

  const handleResponse = (res: any) => {
    console.log("handleResponse", res);
    const updatedArray = res.data.map((obj: any, index: any) => ({ ...obj, mycount: 0, index: index }));
    console.log("updatedArray", updatedArray);
    setInventoryList(updatedArray);
  };

  const handleError = (error: any) => {
    console.log("handleError", error);
    // Handle error if needed
  };;

  useEffect(() => {
    // Make object to pass to the function as a single object
    // Declare types for 'handleError' and 'handleResponse' if needed
    const requestData: UserRequestData = {
      //url: "/10",
      url:"/consumerbe/api/v2/outlet/8/items",
      method: "GET",
      header: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzUxMiJ9.eyJqdGkiOiJjODA5YjZmYi1hZWZjLTRlZmItODJkNC1hZGEyODQwMDAwOWYiLCJzdWIiOiIxMjE1NiIsImlhdCI6MTcwMDE1MzY0NCwicm9sZSI6IlVTRVIiLCJwZXJtaXNzaW9ucyI6WyJ1c2VyIl19.ATtjGGMqnTetYIwTE_9uO7oe5Q_LsHqGIeoAQaxDpvb_3fNpsanDoDbFtyKQ2kpUqgaj3V0Z3vpdLxrULhNMZtA-ASdxVfl1qy0IjkiNswjAl8k70toDMiHhHhvI0krSt0elibHIqAeCoV7b1UNGGZFzH7wLeFoLAdc9a6g-Gf9If3UT`,
        "x-app-platform": "web",
        "x-app-version": "v1.0.1",
        //HEADER ERROR
        "x-device-id":localStorage.getItem("uuid")
      },
      payload:{ name:"tahzeeb"},
      handleError,
      handleResponse,
    };

    // Call the action creator with the requestData object
        props.fetchUserRequest(requestData);
  }, [props.fetchUserRequest]);

  console.log("UserContainer props", props);
  return (
    <>
      <h1>hello i m user container.js  TYPE_SCRIPT</h1>
         <Component inventoryList={inventoryList}/> 
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
