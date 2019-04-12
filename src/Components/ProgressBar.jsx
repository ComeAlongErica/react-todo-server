import React from 'react'
import styled from 'styled-components'

const ProgressContainer = styled.div`
position: relative;
`
const Bar = styled.div`
position: absolute;
bottom: -5px;
background-image: linear-gradient( to right, #ffd74e, #ffae0d);
height: 10px;
border-radius: 0 10px 10px 0;
width: ${props => props.width || '100%'};
display: flex;
`
const ListsHeader = styled.div`
display: flex;
justify-content: space-between;
p {
  margin: 10px;
}
`
const EndPoint = styled.div`
background-color: #ffae0d;
margin-left: auto;
height: 20px;
width: 20px;
border-radius: 100%;
align-self: center;
`

const ProgressBar = props => {
  return <ProgressContainer>
    <ListsHeader>
      <p>Open Tasks</p>
      <p>1/4</p>
    </ListsHeader>
    <Bar width={'75%'}>
      <EndPoint />
    </Bar>
  </ProgressContainer>
}

export default ProgressBar
