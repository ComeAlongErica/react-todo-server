import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 70%;
max-width: 700px;
margin: 10px auto;
background-color: white;
border-radius: 5px;
min-height: 150px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 5px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px;
:hover {
  box-shadow: rgba(9, 30, 66, 0.25) 0px 8px 16px -4px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
}
`

const RadioButton = styled.input`
margin: 50px;
position: relative;
  &:before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 2px solid #ffae0d;
  display: inline-block;
  vertical-align: middle;
  width: 15px;
  height: 15px;
  padding: 2px;
  margin-right: 10px;
  text-align: center;
  border-radius: 100%;
  }
  &:checked::before {
    background-color: #ffae0d;
  }
`
const TaskLabel = styled.label`
flex-grow: 1;
`

const TaskCard = props => {
  const { task, deleteTask } = props
  return <CardContainer>
    <RadioButton type='checkbox' id='task' />
    <TaskLabel htmlFor='task'>{task.task}</TaskLabel>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
  </CardContainer>
}

export default TaskCard
