import { createAction } from "redux-actions"
import * as types from "./actionTypes"


export const AddLettuce = createAction(types.ADD_LETTUCE)
export const AddBacon = createAction(types.ADD_BACON)
export const AddCheese = createAction(types.ADD_CHEESE)
export const AddMeat = createAction(types.ADD_MEAT)

export const RemoveLettuce = createAction(types.REMOVE_LETTUCE)
export const RemoveBacon = createAction(types.REMOVE_BACON)
export const RemoveCheese = createAction(types.REMOVE_CHEESE)
export const RemoveMeat = createAction(types.REMOVE_MEAT)
export const RemoveAll = createAction(types.REMOVE_ALL)