const url = 'http://localhost:5000/lists/'

const getTasks = () => {
  return window.fetch(url)
    .then(res => res.json())
}

const addTask = task => {
  let data = {
    task: task,
    completed: 'false'
  }

  return window.fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(error => console.log('error: ', error))
}

const putTask = (e, task) => {
  let id = task.id
  let taskClone = { ...task }
  let isSelected = e.currentTarget.checked
  taskClone.completed = isSelected

  let putUrl = url + id
  return window.fetch(putUrl,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskClone)
    })
    .then(res => res.json())
    .catch(error => console.log('error: ', error))
}

const deleteTask = id => {
  let deletetUrl = url + id

  return window.fetch(deletetUrl,
    {
      method: 'DELETE'
    })
    .then(res => res.json())
    .catch(error => console.log('error: ', error))
}

const deleteAll = () => {
  return window.fetch(url,
    {
      method: 'DELETE'
    })
    .then(res => res.json())
    .catch(error => console.log('error: ', error))
}

export { getTasks, addTask, putTask, deleteTask, deleteAll }
