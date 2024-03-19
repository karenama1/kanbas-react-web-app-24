import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
export interface KanbasState {
    modules: ReturnType<typeof modulesReducer>;
    assignments: ReturnType<typeof assignmentsReducer>;
}

const store = configureStore({
  reducer: {
    modules:modulesReducer,
    assignments: assignmentsReducer,
  }
})

export default store;

