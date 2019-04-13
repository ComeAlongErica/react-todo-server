import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
width: 70%;
max-width: 700px;
margin: 0px auto;
background-color: white;
border-radius: 5px;
min-height: 50px;
`

const RadioButton = styled.input`
margin: 20px;
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

const TaskCard = props => {
  const { task } = props
  console.log(task)
  return <CardContainer>
    <RadioButton type='checkbox' id='task' />
    <label htmlFor='task'>{task.task}</label>
    <button>Delete</button>
  </CardContainer>
}

export default TaskCard
