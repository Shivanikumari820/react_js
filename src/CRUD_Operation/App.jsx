import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Insert from "./pages/insert";
import Display from "./pages/Display";
import Update from "./pages/Update";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="insert" element={<Insert />} />
        <Route path="display" element={<Display />} />
        <Route path="update" element={<Update />} />

      </Route>
    </Routes>
  );
};

export default App;
