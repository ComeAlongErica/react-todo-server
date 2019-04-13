import React, { useState } from 'react'
import styled from 'styled-components'

const DeleteAllContainer = styled.form`
color: #343535;
display: flex;
flex-direction: column;
align-items: center;
h2 {
  margin-top: 30px;
}
`
const DeleteAllButton = styled.button`
align-self: center;
width: 238px;
height: 55px;
text-transform: lowercase;
letter-spacing: 1px;
font-size: 20px;
font-weight: bold;
padding: 10px 20px;
margin: 10px 0 40px 0;
transition: .3s ease;
border-radius: 10px;
border: solid 2px transparent;
background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient( to right, #ffd74e, #ffae0d);
background-origin: border-box;
background-clip: content-box, border-box;
color: white;
box-shadow: none;
:hover {
  box-shadow: 2px 1000px 1px #fff inset;
  color: #343535;
  cursor: pointer;
}
`

const NewTaskModal = props => {
  const { deleteAll, closeModal } = props
  const [confirmDelete, setConfirmDelete] = useState(false)

  let buttonText = confirmDelete ? 'Are you sure?' : 'delete all'

  const handleDelete = e => {
    e.preventDefault()
    if (confirmDelete) {
      deleteAll()
      setConfirmDelete(!confirmDelete)
      closeModal('close')
    } else {
      setConfirmDelete(!confirmDelete)
    }
  }

  return (
    <DeleteAllContainer>
      <h2>Delete All Tasks</h2>
      <DeleteAllButton onClick={handleDelete} >{buttonText}</DeleteAllButton>
    </DeleteAllContainer>
  )
}

export default NewTaskModal
