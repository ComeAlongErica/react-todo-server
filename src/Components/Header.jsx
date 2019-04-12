import React from 'react'
import styled from 'styled-components'

import AddTask from './parts/AddTask'

const HeaderContainer = styled.div`
width: 100vw;
background-image: linear-gradient( to right, #ffd74e, #ffae0d);
height: 120px;
`

const Header = props => {
  return <HeaderContainer>
    <AddTask />
  </HeaderContainer>
}

export default Header
