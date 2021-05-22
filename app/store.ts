import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice';
import createSagaMiddleware from 'redux-saga';
import saga from '../features/Counter/counterSaga'

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export function makeStore() {
	return configureStore({
		reducer: { counter: counterReducer },
		middleware
	});
}

const store = makeStore()

sagaMiddleware.run(saga);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export default store;
