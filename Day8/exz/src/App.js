import React from 'react'
import MyComponent from './Components/MyComponent';
import WithLoading from './Components/WithLoading';
import NavBar from './Components/Navbar';

const WrappedComponentWithLoading = WithLoading(MyComponent);
const App = () => {
  return (
    <>
      <div className="App">
        <WrappedComponentWithLoading />
        {/* <NavBar/> */}
      </div>
    </>
  )
}

export default App