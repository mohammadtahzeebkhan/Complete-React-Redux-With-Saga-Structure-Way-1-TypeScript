import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import UserContainer from './Component/VmInventory/container';
import { UserRequestData } from './Component/VmInventory/action';





function App(): JSX.Element {
  return (
    <div>
      <Router>
        <Routes>
          {/* Pass the type as a prop for UserContainer */}
          <Route path="/" element={<UserContainer 
          fetchUserRequest={
            function (data: UserRequestData): void {
            throw new Error('Function not implemented.');
          } }
          userData={null} loading={false} error={null}   />} />
          {/* <Route path="/user" element={<UserPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
