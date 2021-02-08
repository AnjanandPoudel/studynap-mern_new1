import {Reducer,initialState} from './reducers'
import {createStore} from 'redux'

export const configStore=()=>{
    const store= createStore(
        Reducer,initialState
    )

    return store

}

