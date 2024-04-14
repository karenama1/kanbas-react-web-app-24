import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import "./index.css";
import "../styles.css";
import "../../libs/font-awesome/css/font-awesome.css";
import "../../libs/bootstrap/bootstrap.min.css";

type CourseType = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string; // Make the image optional
};

type DashboardProps = {
  courses: CourseType[];
  course: CourseType;
  setCourse: (course: CourseType) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (updatedCourse: CourseType) => void; // Assuming you have this function in the parent
};


function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; }) { 
  return (
    <div className="wd-dashboard-grid">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (12)</h2> <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control" 
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date" 
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date" 
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={'../images/course.jpg'} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                    <p className="card-next">Full Stack software developer</p>
                  <Link to={`/Kanbas/Courses/${course._id}`}
                         className="list-group-item">
                    <button onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                    <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>
                        Delete
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
export default Dashboard;