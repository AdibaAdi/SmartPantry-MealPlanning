import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeSearch from './pages/RecipeSearch';
import Leftovers from './pages/Leftovers';
import CreateRecipe from './pages/CreateRecipe';
import MoreInfo from './pages/MoreInfo';
import Login from './pages/loginUI/Login';
import Register from './pages/loginUI/Register';
import ErrorPage from './pages/ErrorPage';
import NavBar from './pages/NavBar'; // Assuming NavBar is a standalone component
import Searching from './pages/Searching'; // Import the Searching component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route index element={<Home />} />
          <Route path="RecipeSearch" element={<RecipeSearch />} />
          <Route path="Leftovers" element={<Leftovers />} />
          <Route path="CreateRecipe" element={<CreateRecipe />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="recipe-details/:recipeTitle" element={<MoreInfo />} />
          <Route path="searching/:searchQuery" element={<Searching />} /> {/* New route for Searching */}
        </Route>
        <Route path="/loginUI">
          <Route index element = {<Login/>}/>
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// ReactDOM.render method for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
