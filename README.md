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


```

**PROJECTS** 2. Tours 3. Reviews 4. Accordion 5. Menu 6. Tabs 7. Slider

#### Forms

8. Lorem Ipsum Generator
9. Color Shades Generator
10. Grocery Bud

#### useRef

11. Navbar

#### useContext

12. Modal and Sidebar
13. Stripe Menus

#### useReducer and useContext

14. Cart

#### React Router
