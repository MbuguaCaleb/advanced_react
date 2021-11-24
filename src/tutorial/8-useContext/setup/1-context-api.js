import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()

//Two Components-->Provider and Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    //to use context, we wrap our whole application in the person context provider
    //I Can be able to pass Anything into my Provider including a whole function
    //It is like the Provider function in Angular JS
    //Once i provide it to the top Most Component, It is going to be available in all other components
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API/ useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  //use Context helps me get the data that has been passed into my Provider
  const mainData = useContext(PersonContext)
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
