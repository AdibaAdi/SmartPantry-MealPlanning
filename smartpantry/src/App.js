import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

   // State to store the data from the backend
   const [users, setUsers] = useState([]);

   // useEffect to fetch data when the component mounts
   useEffect(() => {
     // Express route URL
     fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`)
       .then(response => response.json()) // Parse the JSON from the response
       .then(data => {
         // Update state with the data from the backend
         setUsers(data);
       })
       .catch(error => {
         // Handle any errors
         console.error('Error fetching data:', error);
       });
   }, []); 
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


       {/* Display data from the backend */}
       <div className="user-list">
          <h2>Users:</h2>
          <ul>
            {users.map(user => (
              <li key={user.username}>{user.name}, {user.email}, {user.password}
              </li> 
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
