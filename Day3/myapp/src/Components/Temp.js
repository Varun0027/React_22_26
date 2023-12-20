import { Component } from 'react'

// Class Component
 class Temp extends Component {
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

// Function component
function Temp1(){
  return(
    <div>Hello world</div>
  )
}
//Function component (Arrow functions)
const Temp2 =() =>{
  return(
    <div>Hello world</div>
  )
}
export default Temp
// export {Temp,Temp1,Temp2}
