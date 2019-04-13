import React, { useState, useEffect, Fragment } from 'react'

import Header from '../Components/Header'
import List from '../Components/List'
// import { getTasks, addTask, putTask, deleteTask } from '../utilities'

const App = () => {
  const [todo, setTodo] = useState()

  useEffect(() => {
    getTasks()
    console.log('isthishappen')
  }, [])

  const addTask = task => {
    let data = {
      type: 'health',
      task: 'drink water',
      completed: 'false'
    }
    let request = new Request('http://localhost:3000/lists/', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    })

    window.fetch(request)
      .then(res => res.json())
      .then(result => {
        console.log('fetch response', result)
        getTasks()
      })
      .catch(error => console.log('error: ', error))
  }

  const getTasks = () => {
    window.fetch('http://localhost:3000/lists/')
      .then(res => res.json())
      .then(result => {
        console.log('get response', result)
        setTodo(result)
      })
  }

  const putTask = (e, task) => {
    console.log(e.currentTarget.checked)
    console.log(task)
    let taskClone = { ...task }
    let isSelected = e.currentTarget.checked
    let id = task.id

    if (isSelected) {
      taskClone.completed = true
    } else {
      taskClone.completed = false
    }

    let request = new Request(`http://localhost:3000/lists/${id}`, {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(taskClone)
    })

    window.fetch(request)
      .then(res => res.json())
      .then((response) => {
        console.log('edit response', response)
        getTasks()
      })
      .catch(error => console.log('error: ', error))
  }

  const deleteTask = id => {
    let request = new Request(`http://localhost:3000/lists/${id}`, {
      method: 'DELETE'
    })

    window.fetch(request)
      .then(res => res.json())
      .then((response) => {
        console.log('delete response', response)
        getTasks()
      })
      .catch(error => console.log('error: ', error))
  }

  console.log(todo)
  return (
    <Fragment>
      <Header addTask={addTask} />
      <List data={todo} deleteTask={deleteTask} putTask={putTask} />
    </Fragment>
  )
}

export default App
