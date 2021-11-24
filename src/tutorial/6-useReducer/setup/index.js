import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'

// reducer function
//The State in my Reducer is state Just before that Update
//reducer always returns the State

//i catch my dispatches in my reducer
const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === 'TESTING') {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: 'Item Added',
    }
  }
}

//all my State that i want to pass Around
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')

  /* application State is now being Managed by My Reducer */
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      //its good to have actions in Uppercase
      dispatch({ type: 'TESTING' })
    } else {
    }
  }
  return (
    <>
      {/* application State is now being Managed by My Reducer */}
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <button type='submit'>Add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
