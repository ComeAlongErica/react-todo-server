import React, { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
`

const NewTaskModal = props => {
  const { addTask } = props
  const [newTask, setNewTask] = useState()
  const handleChange = e => {
    setNewTask(e.target.value)
  }
  return (
    <FormContainer>
      <h2>Add New Task</h2>
      <input
        placeholder={'level up'}
        onChange={handleChange} />
      <button onClick={() => addTask(newTask)} >add</button>
    </FormContainer>)
}

export default NewTaskModal
