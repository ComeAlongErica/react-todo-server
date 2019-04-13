import React from 'react'
import styled from 'styled-components'

const NewTaskModal = props => {
  const { handleClick } = props
  return (
    <button onClick={handleClick} >Are you sure?</button>
  )
}

export default NewTaskModal
