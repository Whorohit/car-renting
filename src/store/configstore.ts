import { configureStore } from '@reduxjs/toolkit';
import { EditPasswordModalsliceReducer, FilterModalReducer, loginModalReducer, PopupModalReducer, signUpModalReducer, userinfoModalReducer } from './index'; // Import your extra reducer here

const store = configureStore({
  reducer: {
    login:loginModalReducer,
    sign:signUpModalReducer,
    userinfonavbar:userinfoModalReducer,
    popup:PopupModalReducer,
    Editpassword:EditPasswordModalsliceReducer,
    Filter:FilterModalReducer, 
  },
});

export default store;