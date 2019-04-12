import React, { useState, useEffect, Fragment } from 'react';

import Header from '../Components/Header'

const App = () => {
  const [todo, setTodo] = useState()

  // useEffect(() => {
  //   fetch('http://localhost:3000/lists/')
  //   .then(res => res.json())
  //   .then(response => setTodo(response))
  // }, [])

  const addTask = (task) => {
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

    fetch(request)
      .then(res => res.json())
      .then(response => console.log('fetch response', response))
      .catch(error => console.log('error: ', error))
  }

  const putTask = (task) => {
    let data = {
      type: 'NONONONON',
      task: 'DO NOTHING',
      completed: 'true'
    }

    let request = new Request('http://localhost:3000/lists/3', {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    })

    fetch(request)
       .then(res => res.json())
      .then(response => console.log('fetch response', response))
      .catch(error => console.log('error: ', error))
  }

  return (
    <Fragment>
      <Header />
    </Fragment>
  )
}

export default App;
