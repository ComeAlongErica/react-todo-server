import React from 'react'
import styled from 'styled-components'
import { Trash2, Plus } from 'react-feather'

import ActionButton from './ActionButton'
import NewTaskModal from './NewTaskModal'
import DeleteAllModal from './DeleteAllModal'

const NavContainer = styled.div`
}
`

const HeaderNav = props => {
  const { openModal, addTask, deleteAll, closeModal } = props
  const renderNav = [
    {
      icon: <Plus size={30} stroke={'#ffae0d'} strokeWidth={3} />,
      component: <NewTaskModal addTask={addTask} />
    },
    {
      icon: <Trash2 size={30} stroke={'#ffae0d'} strokeWidth={3} />,
      component: <DeleteAllModal deleteAll={deleteAll} closeModal={closeModal} />
    }
  ]
  return (
    <NavContainer>
      {renderNav.map((item, idx) => <ActionButton
        key={idx}
        icon={item.icon}
        handleClick={() => openModal(item.component)} />)}
    </NavContainer>
  )
}

export default HeaderNav
