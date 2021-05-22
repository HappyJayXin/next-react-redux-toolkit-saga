import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '../../app/store';

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    incrementAsync: (state, action) => {
      state.value = action.payload
    },
    incrementStatus: (state, action) => {
      state.status = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, incrementAsync, incrementStatus } = counterSlice.actions

export const selectCount = (state: AppState) => state.counter.value
export const selectStatus = (state: AppState) => state.counter.status

export default counterSlice.reducer