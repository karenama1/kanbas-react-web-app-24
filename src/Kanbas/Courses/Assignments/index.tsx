import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setAssignments, addAssignment, deleteAssignment, updateAssignment, selectAssignment } from "../Assignments/assignmentsReducer";
import { KanbasState } from "../../store";
import "../../../libs/font-awesome/css/font-awesome.css";
import "../../../libs/bootstrap/bootstrap.min.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as service from "../Assignments/service";


function Assignments() {
  // const { courseId } = useParams();
  const { courseId } = useParams();
  const { assignmentId } = useParams();
  useEffect(() => {
    service.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);
  
  const handleAddAssignment = () => {
    service.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await service.updateAssignment(assignmentId, assignment);
    dispatch(updateAssignment(assignment));
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    service.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    })
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Are you sure you want to delete this assignment?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(deleteAssignment(assignmentId)),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };
  const assignmentList = useSelector((state: KanbasState) => state.assignments.assignments);
  // const courseAssignments = assignments.filter((assignment:any) => assignment.course === courseId);
  const dispatch= useDispatch();
  const assignment = useSelector((state: KanbasState) => state.assignments.assignment);

  return (
    <div>
      <div className="d-flex justify-content-end gap-1 mb-2">
        <div className="d-flex mb-3 mt-3 gap-2">
          <div className="form-outline me-3">
            <input type="text" id="form1" className="form-control rounded-0" placeholder="Search for Assignments" />
          </div>
          <button className="btn btn-outline-dark rounded-0"> + Group</button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`} className="btn btn-danger rounded-0"> + Assignment </Link>
          <button className="btn btn-outline-dark rounded-0"> <i className="fa fa-cog" aria-hidden="true"></i></button>
          <button className="btn btn-outline-dark rounded-0"> <i className="fa fa-eye" aria-hidden="true"></i> Student View </button>
        </div>
      </div>
      <hr />
{/*        
        <input
        type="text"
        value={assignment.course}
        placeholder="Assignment number"
        onChange={(e) => dispatch(setAssignments({ ...assignment, name: e.target.value }))}
        className="module-name-input"
      />
      <input
        type="text"
        value={assignment.name}
        placeholder="assignment name"
        onChange={(e) => dispatch(setAssignments({ ...assignment, description: e.target.value }))}
        className="module-description-input"
      />

      {/* Buttons */}
        {/* <button 
         type="button"
         className="btn btn-success float-end"
         onClick={handleAddAssignment}>
          Add
        </button>
        <button 
         type="button"
         className="btn btn-primary float-end"
         onClick={handleUpdateAssignment}>
          Update
        </button> */}

      {/* The list of assignments */}
      <div className="list-group">
        <ul className="list-group mb-5 rounded-0">
          {/* List items */}
          {assignmentList.filter((assignment: any) => assignment.course === courseId).map((assignment:any, index) => (
            <li key={assignment._id} className="list-group-item" style={{ borderLeft: "5px solid green" }}>
              <div className="row">
                <div className="col col-1 mt-2" >
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <i className="fa fa-ellipsis-v ms-1 me-3" aria-hidden="true"></i>
                  <i className="fa fa-file-text-o" style={{ color: "green", marginLeft: "5px", marginRight: "5px" }}></i>
                </div>
                <div className="col">
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="wd-fg-color-black">
                    {assignment.course} - {assignment.title} <br />
                    <span className="wd-fg-color-red">Multiple Modules</span> | <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                  </Link>     
                </div>
                <div className="col">
                {/* Buttons */}
                {/* <button
                    type="button"
                    className="btn btn-success me-2 float-end"
                    onClick={handleAddAssignment}>
                      Add
                    </button> */}
                    {/* <button 
                    type="button"
                    className="btn btn-primary me-2 float-end"
                    onClick={handleUpdateAssignment}>
                      Edit
                   </button> */}
                  <button className="btn btn-danger float-end me-2" onClick={() => handleDeleteAssignment(assignment._id)}>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Assignments;
