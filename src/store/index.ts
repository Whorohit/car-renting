import {
  createAsyncThunk,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'extra/fetchData',
  async () => {
    // Your asynchronous logic here
    const response = await fetch('your_api_endpoint');
    const data = await response.json();
    console.log(data);

    return data; // Assuming your API returns data
  }
);
interface ExtraState {
  data: Record<string, any>[];
  loading: boolean;
  error: string | null;
}
interface ModalState {
  isOpen: boolean;
}
const initialState:ModalState = {
  isOpen:false
};
const ModalState:ModalState = {
  isOpen: false,
};

const loginModalslice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleLoginModal: (state) => {
     state.isOpen = !state.isOpen; // // Toggles the state between true and false
    },
  },
})
const PopupModalslice = createSlice({
  name: "Popu[",
  initialState,
  reducers: {
    togglePopup: (state) => {
     state.isOpen = !state.isOpen; // // Toggles the state between true and false
    },
  },
})
const userinfoslice = createSlice({
  name: "userinfonavbar",
  initialState,
  reducers: {
    toggleuserinfo: (state) => {
    console.log(1233);
    
     state.isOpen = !state.isOpen; // // Toggles the state between true and false
    },
  },
})
const SignUpModalslice = createSlice({
  name: "SignuUp",
  initialState,
  reducers: {
    toggleSignUpModal: (state) => {
     state.isOpen = !state.isOpen; //; // Toggles the state between true and false
    },
  },
})


export const { toggleLoginModal } = loginModalslice.actions;
export const { toggleSignUpModal } = SignUpModalslice.actions;
export const { toggleuserinfo } = userinfoslice.actions;
export const { togglePopup} = PopupModalslice.actions;

export const loginModalReducer = loginModalslice.reducer;
export const signUpModalReducer = SignUpModalslice.reducer;
export const userinfoModalReducer = userinfoslice.reducer;
export const PopupModalReducer = PopupModalslice.reducer;
