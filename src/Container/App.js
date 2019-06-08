import React, { useState, useEffect, Fragment } from 'react'

import Header from '../Components/Header'
import List from '../Components/List'
import Modal from '../Components/parts/Modal'
import { getTasks, addTask, putTask, deleteTask, deleteAll } from '../utilis'

const App = () => {
  const [todo, setTodo] = useState()
  const [displayModal, setDisplayModal] = useState(false)
  const [modalContent, setModalContent] = useState()
  const [showCompleted, setShowCompleted] = useState(true)
  // const connecToServer = () => this.connecToServer.bind(this)

  useEffect(() => {
    getTasks().then(tasks => setTodo(tasks))
    // connecToServer()
  }, [])

  const getAndUpdate = () => {
    getTasks().then(tasks => setTodo(tasks))
  }

  const addUpdateTasks = task => {
    addTask(task).then(() => getAndUpdate())
  }

  const putUpdateTasks = (e, task) => {
    putTask(e, task).then(() => getAndUpdate())
  }

  const deleteUpdateTasks = id => {
    deleteTask(id).then(() => getAndUpdate())
  }

  const deleteAllAndUpdate = () => {
    deleteAll().then(() => {
      getAndUpdate()
      setDisplayModal(false)
    })
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
        addTask={addUpdateTasks}
        deleteAll={deleteAllAndUpdate}
        toggleCompleted={toggleCompleted}
        showCompleted={showCompleted} />
      <List
        data={todo}
        deleteTask={deleteUpdateTasks}
        putTask={putUpdateTasks}
        showCompleted={showCompleted} />
      {displayModal &&
        <Modal
          modalContent={modalContent}
          closeModal={closeModal} />}
    </Fragment>
  )
}

export default App
