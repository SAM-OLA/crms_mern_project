import React from 'react'

function Footer1(props) {
  let flagShow = props.flag1
  console.log("Flag "+flagShow)
  if (flagShow)
  {
  return (
    <React.Fragment>
      <button>Click Here!!!</button>
      <br></br>
      <input tpe='text' placeholder='Username'></input>
      <br></br>
      <input type='text' placeholder='Password'></input>
      <br></br>
    </React.Fragment>
  )
  }
}

export default Footer1