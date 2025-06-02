import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Blogs from "./pages/Blogs";


// import Nopage from "./pages/Nopage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="experience" element={<Experience/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
