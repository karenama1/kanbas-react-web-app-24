import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  modules: [{ _id:"", name: "", description: "", course:"",lessons:[]}],
  module: {name:"", lessons: []},
}

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    addModule: (state: any, action) => {
      state.modules = [action.payload, ...state.modules
        // { ...action.payload, _id: new Date().getTime().toString() },
        //   ...state.modules,
      ];
    },
    deleteModule: (state: any, action) => {
      state.modules = state.modules.filter(
        (module: any) => module._id !== action.payload
      );
    },
    updateModule: (state: any, action) => {
      state.modules = state.modules.map((module: any) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
    resetModuleState: (state) => {
      state.module = {name: "", lessons: []};
      },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule, setModules, resetModuleState } = modulesSlice.actions;
export default modulesSlice.reducer;