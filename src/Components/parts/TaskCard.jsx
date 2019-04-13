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

const TaskCard = props => {
  return <CardContainer>
    <input type='radio' />
    This is a task
    <button>Complete</button>
    <button>Delete</button>
  </CardContainer>
}

export default TaskCard
