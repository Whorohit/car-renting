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
const initialState: ModalState = {
  isOpen: false
};

interface Filter {
  isOpen: boolean;
  Brand: string[];
  Category: string[];
  Fuel: string[];
  Budget: number[];
  Transmission: string[]
  sort: string


}
const filter: Filter = {
  isOpen: false,
  Brand: [],
  Category: [],
  Fuel: [],
  Budget: [0,2000000],
  Transmission: [],
  sort: "desc"

}

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
  name: "Popup",
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
const EditPasswordModalslice = createSlice({
  name: "Editpassword",
  initialState,

  reducers: {
    toggleEditPassowordModal: (state) => {
      state.isOpen = !state.isOpen; //; // Toggles the state between true and false
    },
  },
})


// extra reducer for carfilter 



const CarFilterModalslice = createSlice({
  name: "Filter",
  initialState: filter,
  reducers: {
    toggleFilterModal: (state) => {
      state.isOpen = !state.isOpen; //; // Toggles the state between true and false
    },
    updateFilterBrand: (state, action: PayloadAction<string>) => {
      const index = state.Brand.indexOf(action.payload);
      if (index === -1) {
        state.Brand.push(action.payload); // Add value if it doesn't exist
      } else {
        state.Brand.splice(index, 1); // Remove value if it exists
      }
    },
    updateFilterCategory: (state, action: PayloadAction<string>) => {
      const index = state.Category.indexOf(action.payload);
      if (index === -1) {
        state.Category.push(action.payload); // Add value if it doesn't exist
      } else {
        state.Category.splice(index, 1); // Remove value if it exists
      }
    },
    updateFilterFuel: (state, action: PayloadAction<string>) => {
      const index = state.Fuel.indexOf(action.payload);
      if (index === -1) {
        state.Fuel.push(action.payload); // Add value if it doesn't exist
      } else {
        state.Fuel.splice(index, 1); // Remove value if it exists
      }
    },
    updateFilterTransmission: (state, action: PayloadAction<string>) => {
      const index = state.Transmission.indexOf(action.payload);
      if (index === -1) {
        state.Transmission.push(action.payload); // Add value if it doesn't exist
      } else {
        state.Transmission.splice(index, 1); // Remove value if it exists
      }
    },
    ClearFilter: (state,) => {

      state.Brand = [];
      state.Category = [];
      state.Budget = [0, 2000000];
      state.Fuel = [];
      state.Transmission = []; // Reset Budget to [0, 2000000]

    },
    updateBudgetFilter: (state,action:PayloadAction<number[]>) => {

     
      state.Budget = action.payload; 
       // Reset Budget to [0, 2000000]

    },
  },

})



export const { toggleLoginModal } = loginModalslice.actions;
export const { toggleSignUpModal } = SignUpModalslice.actions;
export const { toggleuserinfo } = userinfoslice.actions;
export const { togglePopup } = PopupModalslice.actions;
export const { toggleEditPassowordModal } = EditPasswordModalslice.actions;
export const { toggleFilterModal, updateFilterBrand,updateFilterCategory,updateFilterTransmission,updateFilterFuel,ClearFilter ,updateBudgetFilter} = CarFilterModalslice.actions;

export const loginModalReducer = loginModalslice.reducer;
export const signUpModalReducer = SignUpModalslice.reducer;
export const userinfoModalReducer = userinfoslice.reducer;
export const PopupModalReducer = PopupModalslice.reducer;
export const EditPasswordModalsliceReducer = EditPasswordModalslice.reducer;
export const FilterModalReducer = CarFilterModalslice.reducer
