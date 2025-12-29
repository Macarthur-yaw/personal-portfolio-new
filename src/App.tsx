import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingBar from "./Components/LoadingBar";


const BlogDetails = lazy(() => import("./Pages/Blogdetail"));
const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingBar />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;