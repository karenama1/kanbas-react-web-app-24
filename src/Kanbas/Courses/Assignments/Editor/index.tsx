import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { addAssignment, updateAssignment, setAssignments } from '../assignmentsReducer';
import { KanbasState } from "../../../store";
import "../Editor/index.css";
import * as service from "../../Assignments/service";

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: "",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (assignmentId) {
      // Fetch the specific assignment and populate the form
      service.findAssignmentById(assignmentId).then((data) => {
        setAssignment({
          title: data.title || "",
          description: data.description || "",
          points: data.points || "",
          dueDate: data.dueDate || "",
          availableFrom: data.availableFrom || "",
          availableUntil: data.availableUntil || "",
        });
      }).catch((error) => {
        console.error("Failed to fetch assignment", error);
        // Optionally navigate back or show an error
      });
    }
  }, [assignmentId]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const updatedData = await service.updateAssignment(assignmentId, assignment);
      dispatch(updateAssignment(updatedData));
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    } catch (error) {
      console.error("Failed to update assignment", error);
      // Handle error state, possibly with a notification to the user
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-end gap-1">
        <div className="d-flex gap-2">
          <i className="fa fa-check-circle-o wd-fg-color-green" style={{ display: "flex", alignItems: "center" }}></i>
          <b style={{ color: "green", display: "flex", alignItems: "center" }}>Published</b>
          <button type="button" className="btn btn-outline-dark rounded-0">
            <i className="fa fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group mb-3">
        <li className="list-group-item form-control">
          <p>Assignment Name</p>
          <input
            name="title"
            className="form-control"
            placeholder="New Assignment"
            value={assignment.title}
            onChange={handleInputChange}
          />
          <p>Assignment Description</p>
          <textarea
            name="description"
            className="form-control"
            placeholder="New Assignment Description"
            value={assignment.description}
            onChange={handleInputChange}
          />
          <p>Points</p>
          <input
            name="points"
            type="number"
            className="form-control"
            value={assignment.points}
            onChange={handleInputChange}
          />
          <p>Due Date</p>
          <input
            name="dueDate"
            type="date"
            className="form-control"
            value={assignment.dueDate}
            onChange={handleInputChange}
          />
          <p>Available From</p>
          <input
            name="availableFrom"
            type="date"
            className="form-control"
            value={assignment.availableFrom}
            onChange={handleInputChange}
          />
          <p>Until</p>
          <input
            name="availableUntil"
            type="date"
            className="form-control"
            value={assignment.availableUntil}
            onChange={handleInputChange}
          />
        </li>
      </ul>
      <hr />
      <div className="d-flex justify-content-end gap-1 mb-2">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-outline-dark rounded-0 me-2">
          Cancel
        </Link>
        <button className="btn btn-primary rounded-0 me-2" onClick={handleFormSubmit}>
          Save
        </button>
        {/* <button className="btn btn-danger rounded-0" onClick={handleAddAssignment}>
          Add
        </button> */}
      </div>
    </div>
  );
}

export default AssignmentEditor;




// function AssignmentEditor() {

// //   const navigate = useNavigate();
//   const { courseId } = useParams();
//   const selectedAssignment = useSelector((state: KanbasState) => state.assignments.assignment);
//   const [assignment, setAssignment] = useState({
//       _id: "",
//       title: "",
//       course: ""
//   });

//   const dispatch = useDispatch();

//   const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
//     setAssignment({ ...assignment, [e.target.name]: e.target.value });
//   };
//   // useEffect(() => {
//   //   service.findAssignmentsForCourse(courseId)
//   //     .then((assignments) =>
//   //       dispatch(setAssignments(assignments))
//   //   );
//   // }, [courseId]);

//   const handleAddAssignment = async () => {
//     try {
//       const newAssignment = await service.createAssignment(courseId, assignment);
//       dispatch(addAssignment(newAssignment)); 
//     } catch(error) {
//       console.error("Failed to add assignment:", error);
//   };

//   const fetchAssignments = async () => {
//     try{
//       const assignments = await service.findAssignmentsForCourse(courseId);
//       dispatch(setAssignments(assignments));
//   } catch (error) {
//       console.error("Failed to fetch assignments:", error);
//   }
// };

//   const handleUpdateAssignment = async () => {
//       const updatedAssignment = await service.updateAssignment(assignment);
//      dispatch(updateAssignment(updatedAssignment));
//       fetchAssignments(); 
// };

//   useEffect(() => {
//   fetchAssignments();
// }, [courseId]);

// // useEffect(() => {
// //   if (selectedAssignment) {
// //       setAssignment(selectedAssignment); 
// //   }
// // }, [selectedAssignment]);
  
//     const status = await service.updateAssignment(assignment);
//     dispatch(updateAssignment(assignment));
//   };

//   return (
//     <div>
//       <div className="d-flex justify-content-end gap-1">
//         <div className="d-flex gap-2">
//           <i className="fa fa-check-circle-o wd-fg-color-green" style={{display: "flex", alignItems: "center" }}></i>
//           <b style={{color: "green", display: "flex", alignItems: "center" }}>Published</b>
//           <button type="button" className="btn btn-outline-dark rounded-0"><i className="fa fa-ellipsis-v"></i></button>
//         </div>
//       </div>
//       <hr/>      

//       <ul className="list-group mb-3">
//         <li className="list-group-item form-control">
//           <p>
//             Assignment Name <input
//             name="name"
//             className="form-control"
//             placeholder="New Assignment"
//             value={assignment.title}
//             onChange={handleInputChange}
//             // onChange={(e) => dispatch(selectAssignment({ ...assignment, name: e.target.value }))}
//             />
//           </p>
//             <textarea 
//                 className="form-control"
//                 placeholder="New Assignment Description"
//                 value={assignment.title}
//                 onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))
//             }/>
//           Points <input
//             className="form-control"
//             value={assignment.title}
//             onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))}
//             />

//      Assign <ul className="list-group mb-3">
//             <li className="list-group-item form-control">
//               <p>
//                 Due <input
//                 type="date"
//                 className="form-control"
//                 value={assignment.title}
//                 onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
//                 />
//               </p>
//               <p>
//                 Available From <input
//                 type="date"
//                 className="form-control"
//                 />
//               </p>
//               <p>
//                 Until <input
//                 type="date"
//                 className="form-control"
//                 />
//               </p>
//             </li>
//           </ul>
//         </li>
//         <hr />
//         <div className="d-flex justify-content-end gap-1 mb-2">
//           <div className="d-flex mb-3 mt-3 gap-2">
//             <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
//               <button className="btn btn-outline-dark rounded-0 me-2">
//                 Cancel
//               </button>
//               <button className="btn btn-primary rounded-0 me-2" onClick={handleAddAssignment} >
//                 Save
//               </button>
//               <button className="btn btn-danger rounded-0" onClick={handleAddAssignment}>
//                 Add
//               </button>
//             </Link>
//           </div>
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default AssignmentEditor;