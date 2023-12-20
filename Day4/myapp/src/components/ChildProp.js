import React from 'react'



function ChildProp (props) {
  return (
    <>
    <h1>I'm {props.name}</h1>
    <p>I'm {props.email}</p>
    </>
  )
}

export default ChildProp