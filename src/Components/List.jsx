import React from 'react'
import styled from 'styled-components'

import ProgressBar from './ProgressBar'

const ListContainer = styled.div`
position: absolute;
bottom: 0;
`
const TodoContainer = styled.div`
width: 100vw;
background-image: linear-gradient(#e2e4e5, #f8f8f8);
height: calc( 100vh - 250px);
`

const List = props => {
  return <ListContainer>
    <ProgressBar />
    <TodoContainer />
  </ListContainer>
}

export default List
