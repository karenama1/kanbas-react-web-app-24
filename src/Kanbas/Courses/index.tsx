import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../libs/font-awesome/css/font-awesome.css";
import "../../libs/bootstrap/bootstrap.min.css";


function Courses({courses}: {courses: any[]}) {
  const { courseId } = useParams();
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <div className="container-fluid">
    {/* <h1><HiMiniBars3 />  Course {course?.name}</h1>
    <CourseNavigation />
    <div> */}
     <div className="d-md-block d-none">
        <div className="wd-breadbar mt-4 ms-3" style={{ width: 1450}}>
       
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <i className="fa fa-bars fa-lg wd-fg-color-red me-4" aria-hidden="true"></i>
                <a className="wd-fg-color-red" href="#">{course._id} {course.number} {course.name}</a>
              </li>
              {/* <li className="breadcrumb-item active" aria-current="page"> &gt; {screen}</li> */}
            </ol>
          <hr />
        </div>
        <CourseNavigation />
      </div>
   
   
    <div>
      <div
        className="overflow-y-scroll position-fixed bottom-0 end-0"
        style={{ left: "430px", top: "50px" }} >
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Piazza" element={<h1>Piazza</h1>} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
          <Route path="Grades" element={<Grades/>} />
        </Routes>
      </div>
    </div>
  </div>
);
}
export default Courses;