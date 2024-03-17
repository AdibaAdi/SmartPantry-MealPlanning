import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeSearch from "./pages/RecipeSearch";
import NavBar from "./pages/NavBar";
import Leftovers from "./pages/Leftovers";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/loginUI/Login"
import Register from "./pages/loginUI/Register"
import CreateRecipe from "./pages/CreateRecipe"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="RecipeSearch" element={<RecipeSearch />} />
          <Route path="Leftovers" element={<Leftovers />} />
          <Route path="CreateRecipe" element={<CreateRecipe />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/loginUI">
          <Route index element={<Login />} />
          <Route path="Register" element={< Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);