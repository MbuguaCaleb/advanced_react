import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Caleb',
    age: 26,
    message: 'random message',
  })

  //when  i do not want to deal with Object directly
  const [name, setName] = useState('Caleb')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')

  const changeMessage = () => {
    //notice the trick//How to change a specific key in My Object with a One Liner
    //setPerson({ ...person, message: 'Hello World!' })
    setMessage('hello world!')
  }
  return (
    <>
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3> */}

      {/* when not using object directly */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>

      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
