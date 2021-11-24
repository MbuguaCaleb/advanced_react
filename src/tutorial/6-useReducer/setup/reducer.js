// reducer function
//The State in my Reducer is state Just before that Update
//reducer always returns the State

//i catch my dispatches in my reducer
export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    //adding new Items
    const newPeople = [...state.people, action.payload]

    //the spread operator helps me track the Initial Value of My State
    //because that is the One i Update as Well
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item Added',
    }
  }

  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'please enter value' }
  }

  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )

    return { ...state, people: newPeople }
  }
  //Its good to have a default case incase no maching type
  //has been passed

  throw new Error('no matching action type')
}
