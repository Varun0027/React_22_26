import NavBar from "./components/NavBar";
import ParentProp from "./components/ParentProp";
import StateEx from "./components/StateEx";
import TempComp from "./components/TempComp";
import './Assets/Css/Style.css'
import Home from "./pages/Home";
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <About/> */}
        {/* <Contact/> */}
      </Routes>





      {/* <ParentProp/> */}
      {/* <StateEx/> */}
      {/* <TempComp/> */}
    </>
  );
}

export default App;
