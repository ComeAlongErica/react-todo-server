import React from 'react'
import styled from 'styled-components'

import AddTask from './parts/AddTask'

const HeaderContainer = styled.div`
width: 100%;
background-image: linear-gradient( to right, #ffd74e, #ffae0d);
height: 120px;
position: absolute;
top: 0;
`

const Header = props => {
  return <HeaderContainer>
    <AddTask />
  </HeaderContainer>
}

export default Header
