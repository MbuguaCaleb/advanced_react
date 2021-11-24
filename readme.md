## Corresponding Projects

#### useState

```
How do i react to changes in my DOM.
Its via useState

How do i react when data from MyPages Change

 //console.log(useState('hello world!'))
  //the second argument in my UseState funtion controls My State
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  //passing default value to MyState
  //i can always set a default value to MyState.
  //My default value can be a number,string, boolean, Object or Array

//the best way to work with the two sections of a hook is by destructuring.

const [text, setText] = useState('random title')

Key things to remember about hooks

(a)They always begin with the name use.

(b)Component Name must be in uppercase

(c)The hook must be in the function or the
   component body.

(d)Hook cannot call conditionally.

i cannot put a hook directly as an argument in an
if else statement.


if(setText('Caleb')){

}else{


}

If i call a function directly it means that i am calling it on render rather than at the
event driver level.

N/B
I can either call functions inline or using a handler

//Inline functions must be called this way
<button className='btn' onClick={() => setPeople([])}>


State Objects,

The spread operator is very important.


//setPerson({ ...person, message: 'Hello World!' })


//Working asynchronously via Set State

//i can have much more control over my state via this method

setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id)
      return newPeople
   })

//The result of my call back function sets this new State



```

**Project**

1. Birthday Reminder

#### useEffect and Conditional Rendering

```
useEffect handles any work outside the component.(sideEffects)

e.g fetching data..

It is used when we want to setUp side effects(Some Work
outside of the Component!)

something that i do not want to handle from the Inside of my Component!

More Notes
// by default runs after every re-render
//line ngOnInit
//Use state does two things ideally

//(a)It updates the new StateValue

//(b)Triggers a rerender without us knowing

//Rememember we cannot call react hooks as conditionals
//We can Only have conditionals within the the Hooks
// cleanup function
// second parameter


SECOND PARAMETER IN USE EFFECT

  //When i put an empty array as the second parameter of the UseEffect callback, UseEffect runs
  //only once in the initial render

  //(a)When i have no dependency array, use effect will run each  and everytime my component gets rerendered

  //(b)If we set up a dependency array that is an empty list, it is only going to run on the first render

  //(c)If it is tied to a dependency eg state Value then each and everytime that dependency changes use effect will be run

  //(d)We can be able to have as many use effects as possible in our components.

CleanUp

It is good practice to implement clean up so as to avoid memory leak.

Just like Observables in Angular JS.


```

**PROJECTS** 2. Tours 3. Reviews 4. Accordion 5. Menu 6. Tabs 7. Slider

#### Forms

```
Controlled Inputs

In controlled inputs my Input is hooked to a State Value.

<label htmlFor='firstName'>Name:</label>
<input type='text' id='firstName' name='firstName' />

htmlFor links my Label to my Input.

Inputs are connected to State Values.

I want to Update my State everytime my Input Changes

Therefore i have onChange event to all inputs i want to submit

  const [firstName, setFirstName] = useState('')

  <input
   type='text'
   id='firstName'
   name='firstName'
   value={firstName}
   onChange={(e) => setFirstName(e.target.value)}
   />

I can then access my State Values on Submit.




```

**PROJECTS**

8.  Lorem Ipsum Generator 9. Color Shades Generator 10. Grocery Bud

#### useRef

```
Uncontrolled Inputs--->UseRef

(a)preserves value after the rerenders

(b)Its difference with use state is that it does not trigger a rerender.

(c)It target DOM nodes/elements

It is more like an Angular Element Reference.

Using this approach we do not have the value which is linked
to the state as we have been handling forms previously


const UseRefBasics = () => {
  const refContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' ref={refContainer} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

N/B

This Elemet refernce can be placed on any other HTML
ELEMENT and not only inputs

It i want to do something specific with a DOM Node, i can
be able to use(UseRef)

Important!

It is Mostly used to target DOM Nodes.

```

**PROJECT**

11. Navbar

### useReducer and useContext

```
Adds more structure to My State especially when dealing with more complex applications.

Helps me in Managing my State Across components.

Its More like Redux.

Actions are passed as parameters to reducers which is called dispatching....>and the Reducer returns
the New State.

(Reducer takes in the Old State and will return the New State)

i Only Update my State when i call dispatch into the reducer


Reducer Funtion

//The reducer will take in My State because at the end of the Day
//all it does is manipulate My State

//An Action is what is dispatched to MY REDUCER thus affecting my State
 and its the one that tells my reducer how to Manipulate my State

//You can think of actions as what are we trying to do


Applicattion State is Now Linked into the Reducer
/* application State is now being Managed by My Reducer */

use reducer takes in two arguments

(a)Reducer

(b)Default State

const [state, dispatch] = useReducer(reducer, defaultState)


How dipatch Works, Reducer Works, and What is an Action.


```

**Property Drilling**

```
 Remember How i can pass props to an Object via spread Operator
 {people.map((person) => {
  return (
    <SinglePerson
      key={person.id}
      {...person}
      removePerson={removePerson}
    />
  )
  })}

Propdrilling is where by i need to pass my functions progrssively
from parent to the children, a function that the parents may not need
but there is no other way the Children will have access.

```

**Use Context/Context API**

```
It is much more like services and providers in Angular JS.

When i use provider in the top Most component, it will be
as well made available in the child components.

//to use context, we wrap our whole application in the person context provider
//I Can be able to pass Anything into my Provider including a whole function
//It is like the Provider function in Angular JS
//Once i provide it to the top Most Component, It is going to be available in all other components

//use Context helps me get the data that has been passed into my Provider

```

**projects**

12. Modal and Sidebar
13. Stripe Menus

14. Cart

#### React Router

**Notes By**

```
Mbugua Caleb

```
