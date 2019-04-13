import React from 'react'
import styled from 'styled-components'

import ProgressBar from './parts/ProgressBar'
import TaskCard from './parts/TaskCard'

const ListContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
`
const TodoContainer = styled.div`
padding: 20px;
background-image: linear-gradient(#e2e4e5, #f8f8f8, white);
height: calc( 100vh - 250px);
`

const List = props => {
  const { data, deleteTask, putTask, showCompleted } = props

  let uncompleted = data ? data.filter(item => item.completed).length : null
  let totalTasks = data ? data.length : null

  // let inCompleteArray = data && data.filter(item => item.completed)
  return <ListContainer>
    <ProgressBar uncompleted={uncompleted} totalTasks={totalTasks} />
    <TodoContainer>
      {!data && <p>There is nothing to show.</p>}
      {data && data.map(task => {
        if (showCompleted) {
          if (!task.completed) {
            return <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              putTask={putTask} />
          }
        } else {
          return <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            putTask={putTask} />
        }
      }

      )}
    </TodoContainer>
  </ListContainer>
}

export default List
