// src/features/assignments/assignmentsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import { assignments } from "../../Database";

const initialState= {
  assignments: assignments,
  assignment :  { _id: "A102", name: "Combustion Analysis", points:100, dueDate:"2023-10-31", description:"This is an assignment.", course: "RS101" },
};

export const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString()},
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter((assignment) => assignment._id !== action.payload);
    },
    updateAssignment: (state, action) => {
        state.assignments = state.assignments.map(assignment => 
          assignment._id === action.payload._id ? action.payload : assignment
        );
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
