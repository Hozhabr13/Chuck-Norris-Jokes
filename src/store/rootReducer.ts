import { combineReducers } from '@reduxjs/toolkit'
import ChuckNorrisJokes from './ChuckNorrisJokes'

const rootReducer = combineReducers({
  ChuckNorrisJokes,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
