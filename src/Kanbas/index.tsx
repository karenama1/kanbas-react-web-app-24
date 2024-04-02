import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
// import * as db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import axios from "axios";
import { Provider } from "react-redux";
import AssignmentEditor from "./Courses/Assignments/Editor";
import Home from "./Courses/Home";
import Account from "./Account";



function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const COURSES_API = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "", endDate: "",
  });
  const addNewCourse = async() => {
    const response = await axios.post(COURSES_API, course);
    setCourses([...courses, response.data]);
  };
  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async() => {
    const response = await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
 return (
  <Provider store={store}>
  <div className="d-flex">
  <KanbasNavigation />
  <div style={{ flexGrow: 1 }}>
    <Routes>
      <Route path="/" element={<Navigate to="Dashboard" />} />
      <Route path="Account" element={<Account/>} />

      <Route path="Account" element={<h1>Account</h1>} /> 
      <Route path="Dashboard" element={<Dashboard 
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>} />
      <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
      <Route path="Courses" element={<Home/>} />
        <Route path="Assignments/new" element={<AssignmentEditor />} />
    </Routes>
  </div>
</div>
</Provider>
 );
}
export default Kanbas