import React from 'react'
import styled from 'styled-components'
import { Trash2, Plus, Eye, EyeOff } from 'react-feather'

import ActionButton from './ActionButton'
import NewTaskModal from './NewTaskModal'
import DeleteAllModal from './DeleteAllModal'

const NavContainer = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 8;
display: flex;

`

const HeaderNav = props => {
  const { openModal, addTask, deleteAll, toggleCompleted, showCompleted } = props

  const eyeIcon = showCompleted ? <Eye size={30} stroke={'#ffae0d'} strokeWidth={3} /> : <EyeOff size={30} stroke={'#ffae0d'} strokeWidth={3} />
  const renderNav = [
    {
      icon: <Plus size={30} stroke={'#ffae0d'} strokeWidth={3} />,
      component: <NewTaskModal addTask={addTask} />
    },
    {
      icon: <Trash2 size={30} stroke={'#ffae0d'} strokeWidth={3} />,
      component: <DeleteAllModal deleteAll={deleteAll} />
    },
    {
      icon: eyeIcon,
      component: false,
      handleClick: toggleCompleted
    }

  ]
  return (
    <NavContainer>
      {renderNav.map((item, idx) => {
        if (item.component) {
          return <ActionButton
            key={idx}
            icon={item.icon}
            handleClick={() => openModal(item.component)} />
        } else {
          return <ActionButton
            key={idx}
            icon={item.icon}
            handleClick={toggleCompleted} />
        }
      })}
    </NavContainer>
  )
}

export default HeaderNav
