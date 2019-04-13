import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
color: #343535;
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
  :hover {
    cursor: pointer;
  }
`
const TaskLabel = styled.label`
flex-grow: 1;
:hover {
    cursor: pointer;
  }
`
const DeleteButton = styled.div`
text-transform: lowercase;
letter-spacing: 1px;
font-size: 13px;
font-weight: bold;
padding: 10px 20px;
margin: 0 50px 0 20px;
border-radius: 10px
border: solid 2px transparent;
background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient( to right, #ffd74e, #ffae0d);
background-origin: border-box;
background-clip: content-box, border-box;
box-shadow: 2px 1000px 1px #fff inset;
:hover {
  color: white;
  box-shadow: none;
  cursor: pointer;
}
`

const TaskCard = props => {
  const { task, deleteTask, putTask } = props
  return <CardContainer>
    <RadioButton
      type='checkbox'
      id='task'
      onClick={e => putTask(e, task)}
      defaultChecked={task.completed} />
    <TaskLabel htmlFor='task'>{task.task}{task.id}</TaskLabel>
    <DeleteButton onClick={() => deleteTask(task.id)}>remove</DeleteButton>
  </CardContainer>
}

export default TaskCard
