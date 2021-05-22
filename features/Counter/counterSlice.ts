import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { AppState } from '../../app/store'
import { fetchCount } from './counterAPI'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
}

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount)
    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
	extraReducers: (builder) => {
		builder.addCase(incrementAsync.pending, (state) => {
			state.status = 'loading'
		}),
		builder.addCase(incrementAsync.fulfilled, (state, action) => {
			state.status = 'idle'
			state.value = action.payload
		})
	}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = (state: AppState) => state.counter.value
export const selectStatus = (state: AppState) => state.counter.status

export default counterSlice.reducer