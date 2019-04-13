import React from 'react'
import styled from 'styled-components'

import HeaderNav from './parts/HeaderNav'

const HeaderContainer = styled.div`
width: 100%;
background-image: linear-gradient( to right, #ffd74e, #ffae0d);
height: 120px;
position: absolute;
top: 0;
`

const Header = props => {
  const { openModal, addTask, deleteAll, toggleCompleted, showCompleted } = props
  return <HeaderContainer>
    <HeaderNav
      showCompleted={showCompleted}
      toggleCompleted={toggleCompleted}
      openModal={openModal}
      addTask={addTask}
      deleteAll={deleteAll} />
  </HeaderContainer>
}

export default Header
