import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeSearch from './pages/RecipeSearch';
import Leftovers from './pages/Leftovers';
import CreateRecipe from './pages/CreateRecipe';
import MoreInfo from './pages/MoreInfo'; // Ensure this import is correct
import Login from './pages/loginUI/Login';
import Register from './pages/loginUI/Register';
import ErrorPage from './pages/ErrorPage';
import NavBar from './pages/NavBar'; // Assuming NavBar is a standalone component

function App() {
  return (
    <BrowserRouter>
  <NavBar /> {/* NavBar rendered here to show on all pages */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="RecipeSearch" element={<RecipeSearch />} />
    <Route path="Leftovers" element={<Leftovers />} />
    <Route path="CreateRecipe" element={<CreateRecipe />} />
    <Route path="recipe-details/:recipeTitle" element={<MoreInfo />} /> {/* Updated */}
    <Route path="loginUI" element={<Login />} />
    <Route path="loginUI/Register" element={<Register />} />
    <Route path="*" element={<ErrorPage />} />
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
