import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState()

  useEffect(() => {
    console.log('useEffect')
  }, [])

  const addTask = (task) => {
    let data = {
      type: 'health',
      task: 'drink water',
      completed: 'false'
    }
    let request = new Request('http://localhost:3000/lists/todo', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    })

    fetch(request)
    .then(res => res.json())
    .then(response => console.log('fetch response' + response))
    .catch(error => console.log('error:' + error))
  }
  
    return (
      <div className={'App'}>
        <button onClick={addTask}>AddTask</button>
      </div>
    )
}

export default App;
