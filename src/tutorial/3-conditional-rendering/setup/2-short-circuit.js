import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState()
  const [isError, setIsError] = useState(false)
  //if text is true i return text
  //When false i return hello world
  //const firstValue = text || 'hello world'

  //if text is true i return Hello WOLD
  //IF FALSE I RETURN TEXT
  //const secondValue = text && 'hello world'

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1> */}
      {/* I cannot return an expression in my JSX */}
      {/* {if(2>1){
    console.log("one")
    }} */}

      {/* i cannever use an if statement.It will confuse my JSX */}

      <h1>{text || 'Mbugua Caleb'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error!</h1>}
      {isError ? (
        <p>There is an Error....!</p>
      ) : (
        <div>
          <h2>There is no Error!</h2>
        </div>
      )}
      {/* {text && <h1>Hello World!</h1>}
      {!text && <h1>Hello World!</h1>} */}
    </>
  )
}

export default ShortCircuit
