import { configureStore } from '@reduxjs/toolkit';
import { loginModalReducer, PopupModalReducer, signUpModalReducer, userinfoModalReducer } from './index'; // Import your extra reducer here

const store = configureStore({
  reducer: {
    // Add your reducers here
  
    login:loginModalReducer,
    sign:signUpModalReducer,
    userinfonavbar:userinfoModalReducer,// Assuming your extra reducer is named 'extraReducer'
    popup:PopupModalReducer// Assuming your extra reducer is named 'extraReducer'
    // Add other reducers as needed
  },
});

export default store;