import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  //alt two of using useState when i do not wish to call it as an named import.

  //i can just call it directly from my React Class.
  //Whenever i am outputting something in my DOM i use return
  const [people, setPeople] = React.useState(data)

  //handler function
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
}

export default UseStateArray
