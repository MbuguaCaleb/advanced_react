import React, { useEffect } from 'react'

//i can as well pass functions as Props
const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  )
}

export default Modal
