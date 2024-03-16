import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeSearch from "./pages/RecipeSearch";
import NavBar from "./pages/NavBar";
import Leftovers from "./pages/Leftovers";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="RecipeSearch" element={<RecipeSearch />} />
          <Route path="Leftovers" element={<Leftovers />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);