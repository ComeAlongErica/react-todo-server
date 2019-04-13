import React, { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
color: #343535;
display: flex;
flex-direction: column;
align-items: center;
h2 {
  margin-top: 30px;
}
`
const TaskInput = styled.input`
align-self: center;
width: 100%;
height: 30px;
display: block;
padding: 10px;
margin: 10px 0;
border: 2px solid #ffae0d;
font-size: 20px;
:focus { 
    outline: none;
    border-color: #ffae0d;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 5px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px;
}
`
const AddButton = styled.button`
align-self: center;
width: 238px;
height: 55px;
text-transform: lowercase;
letter-spacing: 1px;
font-size: 20px;
font-weight: bold;
padding: 10px 20px;
margin: 10px 0 40px 0;
transition: .3s ease;
border-radius: 10px;
border: solid 2px transparent;
background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient( to right, #ffd74e, #ffae0d);
background-origin: border-box;
background-clip: content-box, border-box;
color: white;
box-shadow: none;
:hover {
  box-shadow: 2px 1000px 1px #fff inset;
  color: #343535;
  cursor: pointer;
}
`

const NewTaskModal = props => {
  const { addTask } = props
  const [newTask, setNewTask] = useState()
  const handleChange = e => {
    e.preventDefault()
    setNewTask(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault()
    addTask(newTask)
  }
  return (
    <FormContainer>
      <h2>Add New Task</h2>
      <TaskInput
        placeholder={'level up'}
        onChange={handleChange} />
      <AddButton onClick={e => handleClick(e)} >Add</AddButton>
    </FormContainer>)
}

export default NewTaskModal
