import React from 'react'
import styled from 'styled-components'

const NewTaskModal = props => {
  const { handleClick } = props
  return (
    <form>
      <input></input>
      <button onClick={handleClick} >add</button>
    </form>)
}

export default NewTaskModal
