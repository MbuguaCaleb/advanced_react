import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  console.log('rendered')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    //making sure i cannot submit empty Values
    if (firstName && email) {
      //ES6
      const person = { id: new Date().getTime().toString(), firstName, email }

      console.log(person)
      //setting my state using functinal approach
      //remember how much this helps especially in the async approach
      setPeople((people) => {
        return [...people, person]
      })

      //resetting My Form
      setFirstName('')
      setEmail('')
    } else {
      console.log('empty Values')
    }
  }

  return (
    <article onSubmit={handleSubmit}>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>Name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>Add Person</button>
      </form>
      {people.map((person) => {
        const { id, firstName, email } = person
        return (
          <div key={id} className='item'>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </article>
  )
}

export default ControlledInputs
