// src/features/assignments/assignmentsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import { stringify } from 'querystring';
// import { assignments } from "../../Database";

const initialState= {
  assignments: [],
  assignment :  { _id: "A102", name: "Combustion Analysis", points:100, dueDate:"2023-10-31", description:"This is an assignment.", course: "RS101" },
};

export const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    setAssignments : (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state: any, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },
    deleteAssignment: (state: any, action) => {
      state.assignments = state.assignments.filter((assignment: any) => assignment._id !== action.payload);
    },
    updateAssignment: (state: any, action) => {
        state.assignments = state.assignments.map((assignment: { _id: any; }) => 
          assignment._id === action.payload._id ? action.payload : assignment
        );
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, selectAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
