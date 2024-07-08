import React from 'react'

const NewButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.nombre}</button>
    </div>
  )
}

export default NewButton
