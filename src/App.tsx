import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./Pages/Blogdetail";
import Home from "./Pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
