import React, { useState, useEffect } from 'react'
// by default runs after every re-render
//line ngOnInit
//Use state does two things ideally

//(a)It updates the new StateValue

//(b)Triggers a rerender without us knowing

//Rememember we cannot call react hooks as conditionals

// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  //What ever is passed in here will run after every render

  useEffect(() => {
    console.log('call useEffect')
    if (value > 1) {
      document.title = `New Messages (${value})`
    }
  })

  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  )
}

export default UseEffectBasics
