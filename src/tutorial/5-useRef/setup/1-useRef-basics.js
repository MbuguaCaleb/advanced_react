import React, { useEffect, useRef } from 'react'

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const divContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
    console.log(divContainer.current)
  }

  //since useRef does not Cause rerender i can be
  //able to take advantage of UseEffect to focus all inputs
  //on the first render
  useEffect(() => {
    refContainer.current.focus()
  })
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' ref={refContainer} />
        <button type='submit'>Submit</button>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  )
}

export default UseRefBasics
