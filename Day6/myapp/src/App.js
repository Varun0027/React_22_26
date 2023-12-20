import './Assets/Css/Style.css'
import Home from "./pages/Home";
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
