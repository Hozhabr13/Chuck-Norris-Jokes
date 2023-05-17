import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit'
import { RANDOM_JOKES } from 'constants/endpoints'
import { JokesCountEnum } from 'constants/enums'
import Api from 'services/api'

export const getChuckNorrisJokes = createAsyncThunk('chuckNorris', async ():Promise<AnyAction> => {
  return await Api.get(RANDOM_JOKES)
})

const initialState: any = {
  data: [],
  status: 'idle',
  errorMessage: ''
}

const chuckNorrisSlice = createSlice({
  name: 'chuckNorris',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChuckNorrisJokes.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getChuckNorrisJokes.fulfilled, (state, { payload }) => {
        state.status = 'success'
        if (state.data.length === JokesCountEnum.MAX_COUNT) {
          state.data.splice(0, 1)
        }
        state.data = [...state.data, payload.data]
      })
      .addCase(getChuckNorrisJokes.rejected, (state, error) => {
        state.status = 'failed'
        state.errorMessage = error
      })
  }
})

export default chuckNorrisSlice.reducer
