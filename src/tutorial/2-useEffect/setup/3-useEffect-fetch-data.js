import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  //two things that happen

  //(a)Update my Value

  //(b)Trigger a rerender so that Value is updated in the DOM
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    console.log(users)
    setUsers(users)
  }

  //runs on every render
  //so as to avoid an infinite loop i will get the users  only once
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
