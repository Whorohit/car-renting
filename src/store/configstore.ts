import { configureStore } from '@reduxjs/toolkit';
import { EditPasswordModalsliceReducer, loginModalReducer, PopupModalReducer, signUpModalReducer, userinfoModalReducer } from './index'; // Import your extra reducer here

const store = configureStore({
  reducer: {
    login:loginModalReducer,
    sign:signUpModalReducer,
    userinfonavbar:userinfoModalReducer,
    popup:PopupModalReducer,
    Editpassword:EditPasswordModalsliceReducer,  
  },
});

export default store;