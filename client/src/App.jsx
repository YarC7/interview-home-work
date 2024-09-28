import "./App.css";
import { Routes, Route } from "react-router-dom";

import Blog from "./pages/Blog";
function App() {
  return (
    <>
      <Routes>
        <Route path="blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
