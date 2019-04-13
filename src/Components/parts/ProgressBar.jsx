import React, { Fragment } from 'react'
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
transition: .5s ease;
`
const ListsHeader = styled.div`
display: flex;
justify-content: space-between;
width: 70%;
max-width: 700px;
margin: 0 auto;
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
  const { uncompleted, totalTasks } = props
  let isDataNull = uncompleted === null || totalTasks === null
  let percentage = !isDataNull ? `${(uncompleted / totalTasks) * 100}%` : null
  console.log(percentage)

  return <ProgressContainer>
    {!isDataNull &&
      <Fragment>
        <ListsHeader>
          <p>Open Tasks</p>
          <p>{uncompleted}/{totalTasks}</p>
        </ListsHeader>
        <Bar width={percentage}>
          <EndPoint />
        </Bar>
      </Fragment>}
  </ProgressContainer>
}

export default ProgressBar
