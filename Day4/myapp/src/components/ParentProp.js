import React from 'react'
import ChildProp from './ChildProp'

const ParentProp = () => {
    const name1 = "Mohanraj M"
    const email1="abc@gmail.com"
    const name2 = "Krishna M"
    const email2="def@gmail.com"
  return (
    <>
    <ChildProp name={name1} email={email1}/>
    <ChildProp name={name2} email={email2}/>
    </>
  )
}

export default ParentProp