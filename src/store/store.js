import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import cardReducer from '../components/Card/cardSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    card: cardReducer
  },
});
