import React from 'react';
import './App.css';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import UserContainer from '../src/Component/UserPage/container';

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserContainer />} />
          {/* <Route path="/user" element={<UserPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
