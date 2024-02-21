import React from "react";
import { Link, useParams } from "react-router-dom";
import { assignments  as allAssignments } from "../../Database";
import "../../../libs/font-awesome/css/font-awesome.css";
import "../../../libs/bootstrap/bootstrap.min.css";


function Assignments() {
  const { courseId } = useParams();
  const courseAssignments = allAssignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="d-flex justify-content-end gap-1 mb-2">
        <div className="d-flex mb-3 mt-3 gap-2">
          <div className="form-outline me-3">
            <input type="text" id="form1" className="form-control rounded-0" placeholder="Search for Assignments" />
          </div>
          <button className="btn btn-outline-dark rounded-0"> + Group</button>
          <button className="btn btn-danger rounded-0"> + Assignment</button>
          <button className="btn btn-outline-dark rounded-0"> <i className="fa fa-cog" aria-hidden="true"></i></button>
          <button className="btn btn-outline-dark rounded-0">
            <i className="fa fa-eye" aria-hidden="true"></i> Student View
          </button>
        </div>
      </div>
      <hr />

      <div className="list-group">
        <ul className="list-group mb-5 rounded-0">
          <li className="list-group-item list-group-item-secondary">
            <i className="fa fa-ellipsis-v float-end me-4"></i>
            <i className="fa fa-plus float-end me-3"></i>
            <i className="fa fa-check-circle float-end me-3"></i>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i> <i className="fa fa-ellipsis-v" aria-hidden="true" style={{ marginRight:'5px'}}></i> Assignments
          </li>
            {
              courseAssignments.map((assignment) => (
                <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="list-group-item" style={{ borderLeft: "5px solid green" }}>
                  <i className="fa fa-ellipsis-v float-end me-4"></i>
                  <i className="fa fa-check-circle float-end me-3" style={{ color: 'green' }}></i>
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i> <i className="fa fa-ellipsis-v" aria-hidden="true"></i> <i className="fa fa-file-text-o"  style={{ color: 'green', marginLeft:'5px', marginRight:'5px'}}></i>  {assignment.title}
                </Link>
              ))
            }
        </ul>
      </div>
    </div>
  );
}
export default Assignments;
// import React, {useState} from "react";
// import { FaEllipsisV, FaPlus, FaCalculator,FaCheckCircle,FaPlusCircle } from "react-icons/fa";
// import { Link, useParams } from "react-router-dom";
// import  assignments  from "../../Database/assignments.json";
// import { Breadcrumb } from "react-bootstrap";


// function Assignments() {
//     const { courseId } = useParams();
//     const [searchQuery, setSearchQuery] = useState("");
//     const assignmentList = assignments.filter(
//       (assignment) => assignment.course === courseId);

//     const filteredAssignments = assignmentList.filter((assignment) =>
//       assignment.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <>
//         {/* {<!-- Add buttons and other fields here -->} */}
//         <div className="col-md-9">
//         <div className="input-group mb-5">
//           <input type="text" className="form-control me-5" placeholder="Search for Assignment"
//           value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
//           <div className="input-group-append">
//             {/* Add any specific behavior or content for the input group append */}
//           </div>
    
    
//           <button className="btn btn-outline-secondary" type="button">+ Group</button>
//           <button className="btn btn-danger" type="button">+ Assignment</button>
//           <select className="float-end">
//             <option>Edit Assignment Dates</option>
//             <option>Edit</option>
//             <option>Speed Grader</option>
//             <option>Duplicate</option>
//             <option>Delete</option>
//             <option>Move To...</option>
//             <option>Send To...</option>
//             <option>Copy To...</option>
//             <option>Share to Commons</option>
//           </select>
//         </div>
//      </div>
//      <div className="flex-fill custom-flex-fill">
//         <ul className="list-group wd-modules">
//           <li className="list-group-item">
//             <div>
//               <FaEllipsisV /> Assignments
//               <span className="float-end">
//                 <span className="rounded border p-2">40% of Total</span>
//                 <FaPlusCircle className="ms-2" />
//                 <FaEllipsisV className="ms-2" />
//               </span>
//             </div>
//             <ul className="list-group">
//               {filteredAssignments.map((assignment) => (
//                 <li className="list-group-item rounded-40" key={assignment._id}>
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <FaEllipsisV style={{ marginRight: '20px' }} />
//                     <FaCalculator style={{ marginRight: '20px', color: 'green' }} />
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div>
//                         <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                           <strong>{assignment.title}</strong><br />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </>
// );
// }
// export default Assignments;