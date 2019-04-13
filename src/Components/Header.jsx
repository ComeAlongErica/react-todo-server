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
  const { addTask, deleteAll } = props
  return <HeaderContainer>
    <HeaderNav addTask={addTask} deleteAll={deleteAll} />
  </HeaderContainer>
}

export default Header
