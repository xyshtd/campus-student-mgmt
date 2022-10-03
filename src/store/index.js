import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import campuses from './campuses'
import students from './students'

const store = configureStore({
  reducer: {
    campuses,
    students
  },
  middleware: [thunk,logger]
});

export default store;