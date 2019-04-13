import React from 'react'
import styled from 'styled-components'

import { Plus } from 'react-feather'

const AddTaskContainer = styled.div`
height: 50px;
width: 50px;
background-color: white;
border-radius: 100%;
position: relative;
margin: 20px;
.plus {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
&&:hover {
  cursor: pointer;
  opacity: .9;
  transition: .5s ease;
}
`

const AddTask = props => {
  return <AddTaskContainer>
    <Plus className={'plus'} size={30} stroke={'#ffd74e'} strokeWidth={3} />
  </AddTaskContainer>
}

export default AddTask
