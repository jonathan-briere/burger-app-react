import { ADD_BACON, ADD_CHEESE, ADD_LETTUCE, ADD_MEAT, REMOVE_ALL, REMOVE_BACON, REMOVE_CHEESE, REMOVE_LETTUCE, REMOVE_MEAT } from "../actions/actionTypes"

const initialState = {
  lettuce: 0,
  bacon: 0,
  cheese: 0,
  meat: 0
}

const burgerReducers = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_LETTUCE:
    return {
      ...state,
      lettuce: state.lettuce + 1
    }

  case ADD_BACON:
    return {
      ...state,
      bacon: state.bacon + 1
    }

  case ADD_CHEESE:
    return {
      ...state,
      cheese: state.cheese + 1
    }

  case ADD_MEAT:
    return {
      ...state,
      meat: state.meat + 1
    }

  case REMOVE_LETTUCE:
    if (state.lettuce > 0) {
      return {
        ...state,
        lettuce: state.lettuce - 1
      }
    }
    else {
      return state
    }

  case REMOVE_BACON:
    if (state.bacon > 0) {
      return {
        ...state,
        bacon: state.bacon - 1
      }
    }
    else {
      return state
    }

  case REMOVE_CHEESE:
    if (state.cheese > 0) {
      return {
        ...state,
        cheese: state.cheese - 1
      }
    }
    else {
      return state
    }

  case REMOVE_MEAT:
    if (state.meat > 0) {
      return {
        ...state,
        meat: state.meat - 1
      }
    }
    else {
      return state
    }

  case REMOVE_ALL:
    return initialState

  default:
    return state
  }
}

export default burgerReducers
