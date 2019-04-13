import React from 'react'
import styled from 'styled-components'

import { Trash2 } from 'react-feather'

const DeleteAllContainer = styled.div`
height: 50px;
width: 50px;
background-color: white;
border-radius: 100%;
position: relative;
margin: 20px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 5px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px;
&&:hover {
  cursor: pointer;
  opacity: .9;
  transition: .5s ease;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 8px 16px -4px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
}
`

const DeleteAll = props => {
  return <DeleteAllContainer>
    <Trash2 className={'plus'} size={30} stroke={'#ffd74e'} strokeWidth={3} />
  </DeleteAllContainer>
}

export default DeleteAll
