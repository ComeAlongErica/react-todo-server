import React, { useState, useEffect, Fragment } from 'react'

import Header from '../Components/Header'
import List from '../Components/List'
// import { getTasks, addTask, putTask, deleteTask } from '../utilities'

const App = () => {
  const [todo, setTodo] = useState()

  useEffect(() => {
    window.fetch('http://localhost:3000/lists/')
      .then(res => res.json())
      .then(result => setTodo(result))
  }, [])

  // const addTask = task => {
  //   let data = {
  //     type: 'health',
  //     task: 'drink water',
  //     completed: 'false'
  //   }
  //   let request = new Request('http://localhost:3000/lists/', {
  //     method: 'POST',
  //     headers: new Headers({ 'Content-Type': 'application/json' }),
  //     body: JSON.stringify(data)
  //   })

  //   fetch(request)
  //     .then(res => res.json())
  //     .then(response => console.log('fetch response', response))
  //     .catch(error => console.log('error: ', error));
  // }

  // const putTask = task => {
  //   let data = {
  //     type: 'NONONONON',
  //     task: 'DO NOTHING',
  //     completed: 'true'
  //   }

  //   let request = new Request('http://localhost:3000/lists/3', {
  //     method: 'PUT',
  //     headers: new Headers({ 'Content-Type': 'application/json' }),
  //     body: JSON.stringify(data)
  //   })

  //   fetch(request)
  //     .then(res => res.json())
  //     .then(response => console.log('fetch response', response))
  //     .catch(error => console.log('error: ', error));
  // }

  const deleteTask = id => {
    let request = new Request(`http://localhost:3000/lists/${id}`, {
      method: 'DELETE'
    })

    window.fetch(request)
      .then(res => res.json())
      .then(response => console.log('fetch response', response))
      .catch(error => console.log('error: ', error))
  }

  console.log(todo)
  return (
    <Fragment>
      <Header />
      <List data={todo} deleteTask={deleteTask} />
    </Fragment>
  )
}

export default App
