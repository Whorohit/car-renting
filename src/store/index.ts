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

interface Filter{
 isOpen:boolean;
 Brand:string[];
 Category:string[];
 Fuel:string[];
 Budget:number[];
 sort:string


}
const filter:Filter={
  isOpen:false,
  Brand:[],
  Category:[],
 Fuel:[],
 Budget:[],
 sort:"des"

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

export const setBrandKey = createAsyncThunk<
  string[],
  { item: string },
  { state: { Filter: Filter } }
>(
  'filter/Brand',
  async ({ item }, thunkAPI) => {
    try {
      const currentState = thunkAPI.getState();
      const updatedTab = [...currentState.Filter.Brand];

      const index = updatedTab.indexOf(item);
      if (index !== -1) {
        updatedTab.splice(index, 1);
      } else {
        updatedTab.push(item);
      }

      console.log(updatedTab);
      return updatedTab;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
export const setCategoryKey = createAsyncThunk<
  string[],
  { item: string },
  { state: { Filter: Filter } }
>(
  'filter/Category',
  async ({ item }, thunkAPI) => {
    try {
      const currentState = thunkAPI.getState();
      const updatedTab = [...currentState.Filter.Category];

      const index = updatedTab.indexOf(item);
      if (index !== -1) {
        updatedTab.splice(index, 1);
      } else {
        updatedTab.push(item);
      }

      console.log(updatedTab);
      return updatedTab;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const CarFilterModalslice = createSlice({
  name: "Filter",
  initialState:filter,
  extraReducers:(builder)=>{
    builder.addCase(setBrandKey.fulfilled, (state, action) => {
      state.Brand = action.payload;
    });
    builder.addCase(setCategoryKey.fulfilled, (state, action) => {
      state.Category = action.payload;
    });
  },
  reducers: {
    toggleFilterModal: (state) => {
     state.isOpen = !state.isOpen; //; // Toggles the state between true and false
    },
  },
})



export const { toggleLoginModal } = loginModalslice.actions;
export const { toggleSignUpModal } = SignUpModalslice.actions;
export const { toggleuserinfo } = userinfoslice.actions;
export const { togglePopup} = PopupModalslice.actions;
export const { toggleEditPassowordModal} = EditPasswordModalslice.actions;
export const {toggleFilterModal } =  CarFilterModalslice.actions;

export const loginModalReducer = loginModalslice.reducer;
export const signUpModalReducer = SignUpModalslice.reducer;
export const userinfoModalReducer = userinfoslice.reducer;
export const PopupModalReducer = PopupModalslice.reducer;
export const EditPasswordModalsliceReducer = EditPasswordModalslice.reducer;
export const FilterModalReducer=CarFilterModalslice.reducer
