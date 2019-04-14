import React, { useState, useEffect, Fragment } from 'react'

import Header from '../Components/Header'
import List from '../Components/List'
import Modal from '../Components/parts/Modal'

const App = () => {
  const [todo, setTodo] = useState()
  const [displayModal, setDisplayModal] = useState(false)
  const [modalContent, setModalContent] = useState()
  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    getTasks()
  }, [])

  const addTask = task => {
    let data = {
      task: task,
      completed: 'false'
    }
    let url = `http://localhost:5000/lists/`

    window.fetch(url,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
        // console.log('fetch response', result)
        getTasks()
      })
      .catch(error => console.log('error: ', error))
  }

  const getTasks = () => {
    window.fetch('http://localhost:5000/lists/')
      .then(res => res.json())
      .then(result => {
        // console.log('get response', result)
        setTodo(result)
      })
  }

  const putTask = (e, task) => {
    let id = task.id
    let taskClone = { ...task }
    let isSelected = e.currentTarget.checked
    taskClone.completed = isSelected

    let url = `http://localhost:5000/lists/${id}`
    window.fetch(url,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskClone)
      })
      .then(res => res.json())
      .then((response) => {
        // console.log('edit response', response)
        getTasks()
      })
      .catch(error => console.log('error: ', error))
  }

  const deleteTask = id => {
    let url = `http://localhost:5000/lists/${id}`

    window.fetch(url,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then((response) => {
        // console.log('delete response', response)
        getTasks()
      })
      .catch(error => console.log('error: ', error))
  }

  const deleteAll = () => {
    let url = `http://localhost:5000/lists`

    window.fetch(url,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then((response) => {
        // console.log('all data delete response', response)
        getTasks()
        setDisplayModal(false)
      })
      .catch(error => console.log('error: ', error))
  }

  const openModal = (content) => {
    setModalContent(content)
    setDisplayModal(!displayModal)
  }

  const closeModal = (value) => {
    if (value === 'close') {
      setDisplayModal(!displayModal)
    }
  }

  const toggleCompleted = () => {
    setShowCompleted(!showCompleted)
  }

  return (
    <Fragment>
      <Header
        openModal={openModal}
        addTask={addTask}
        deleteAll={deleteAll}
        toggleCompleted={toggleCompleted}
        showCompleted={showCompleted} />
      <List
        data={todo}
        deleteTask={deleteTask}
        putTask={putTask}
        showCompleted={showCompleted} />
      {displayModal &&
        <Modal
          modalContent={modalContent}
          closeModal={closeModal} />}
    </Fragment>
  )
}

export default App
