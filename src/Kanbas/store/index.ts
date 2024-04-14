import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
export interface KanbasState {
    modules: ReturnType<typeof modulesReducer>;
    assignments: ReturnType<typeof assignmentsReducer>;
}

export type moduleType = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: moduleLessonType[];
};

export type moduleLessonType = {
  _id: string;
  name: string;
  description: string;
  module: string;
};
const store = configureStore({
  reducer: {
    modules:modulesReducer,
    assignments: assignmentsReducer,
  }
})

export default store;

