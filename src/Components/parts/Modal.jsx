import React, { Fragment } from 'react'
import styled from 'styled-components'

import { X } from 'react-feather'

const ModalBG = styled.div`
z-index: 10;
height: 100vh;
width: 100vw;
position: fixed;
top: 0; left: 0;
background-color: #34353571;
`
const DisplayModal = styled.div`
z-index: 15;
position: fixed;
top: 50%; left: 50%;
transform: translate(-50%, -50%);
background-color: white;
border-radius: 5px;
min-height: 50vh;
min-width: 50vw;
display: flex;
justify-content: center;
.x-mark {
  position: absolute;
  right: 0;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
}
`

const ActionButton = props => {
  const { closeModal, modalContent } = props
  return (
    <Fragment>
      <ModalBG onClick={closeModal} />
      <DisplayModal>
        <X className={'x-mark'} size={25} stroke={'#343535'} strokeWidth={3} />
        {modalContent}
      </DisplayModal>
    </Fragment>
  )
}

export default ActionButton
