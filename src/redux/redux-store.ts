import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import CategoryReducer from './categories-reducer'

const rootReducers = combineReducers({
catCategory:CategoryReducer
})
type RootReducersType = typeof rootReducers;

export type ReducersType = ReturnType<RootReducersType>;

type ProperitesTypes<T> = T extends  {[key:string]: infer  U } ? U : never;

export type InferActionsType<T extends {[key:string]:(...arg:any[])=> any}> = ReturnType<ProperitesTypes<T>>;

export type BaseThunkType <A extends Action = Action, R = Promise<void>> =  ThunkAction<R, ReducersType, unknown, A>

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;