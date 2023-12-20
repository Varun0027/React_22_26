import Nav from "./Components/Nav";
import './Assets/Css/nav.css'
import Footer from "./Components/Footer";

import Img1 from './Assets/Img/bg.jpg'
function App() {
  return (
    <>
      <Nav />
      <div className='main'>
        <img src={Img1} alt="myimage"/>
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="myimage"/>
        <p>
          Hello World
        </p>
      </div>
    <Footer/>
    </>
  )
}

export default App;
