import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    /** @TODO Add your reducers here */
    counter: counterReducer,
  },
});
