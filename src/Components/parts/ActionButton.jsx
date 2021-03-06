import React from 'react'
import styled from 'styled-components'

const ActionContainer = styled.div`
z-index: 5;
height: 50px;
width: 50px;
background-color: white;
border-radius: 100%;
position: relative;
margin: 20px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 5px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px;
display: flex;
justify-content: center;
align-items: center;
&&:hover {
  cursor: pointer;
  transition: .5s ease;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 8px 16px -4px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
}
`

const ActionButton = props => {
  const { icon, handleClick } = props
  return (
    <ActionContainer onClick={handleClick} >
      {icon}
    </ActionContainer>
  )
}

export default ActionButton
