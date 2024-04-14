import React, { useState, useEffect } from "react";
import "./index.css";
import  modules from "../../Database/module.json";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "../../../Kanbas/styles.css";
import "../../../libs/font-awesome/css/font-awesome.css";
import "../../../libs/bootstrap/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
  resetModuleState
} from "./reducer";
import { KanbasState, moduleLessonType, moduleType } from "../../store";
import * as client from "../Modules/client";


function ModuleList() {
   const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const { courseId } = useParams();
  console.log("Courseid is", courseId);
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  console.log("modules is ", modules);

  const [lessons, setLessons] = useState([]);

//   const [lessonState, setLessonState] = useState<moduleLessonType>({
//     _id: "",
//     name: "",
//     description: "",
//     module: "",
// })

 const addLesson = (lesson: moduleLessonType, module: moduleType) => {
  client.createLesson(module._id, lesson)
  .then((newLesson) => {
      dispatch(updateModule({ ...module, lessons: [...module.lessons, newLesson] }));
  });
}
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  // const [moduleList, setModuleList] = useState(() => modules.filter((module) => module.course === courseId));
  const moduleList = useSelector((state: KanbasState) => 
  state.modules.modules);
 const module = useSelector((state: KanbasState) => 
  state.modules.module);
 const dispatch = useDispatch();
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end gap-1 mb-10">
        <div className="module-actions">
      <button type="button" className="btn btn-outline-dark rounded-0">Collapse All</button>
        <button type="button" className="btn btn-outline-dark rounded-0">View Progress</button>
        
        <div className="dropdown">
          <button className="btn btn-outline-dark rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-check-circle-o wd-fg-color-green"></i> Publish All
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
            <li><a className="dropdown-item" href="#">UnPublish</a></li>
          </ul>
        </div>
        <button type="button" className="btn btn-danger rounded-0">+ Modules</button>
        <button type="button" className="btn btn-outline-dark rounded-0"><i className="fa fa-ellipsis-v"></i></button>
      </div>
    </div>
      <hr />
      <div className="d-flex justify-content-end gap-1 mb-2">
      {/* Input fields */}
      <input
        type="text"
        value={module.name}
        placeholder="Module name"
        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        className="module-name-input"
      />
      {/* <input
        type="text"
        value={module.description}
        placeholder="Module description"
        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        className="module-description-input"
      /> */}

      {/* Buttons */}
        <button 
         type="button"
         className="btn btn-success float-end"
         onClick={handleAddModule}>
          Add
        </button>
        <button 
         type="button"
         className="btn btn-primary float-end"
         onClick={handleUpdateModule}>
          Update
        </button>
    </div>
    <hr />

    <ul className="list-group wd-modules">
      {moduleList
        .filter((module: any) => module.course === courseId)
        .map((module: any, index) => (
          <li key={module._id} className="list-group-item">
            <button
              type="button"
              className="btn btn-success float-end"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
               type="button"
               className="btn btn-danger float-end"
              onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;











// import React, { useState, useEffect } from "react";
// import "./index.css";
// // import  modules from "../../Database/module.json";
// import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
// import { useParams } from "react-router";
// import "../../../Kanbas/styles.css";
// import "../../../libs/font-awesome/css/font-awesome.css";
// import "../../../libs/bootstrap/bootstrap.min.css";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addModule,
//   deleteModule,
//   updateModule,
//   setModule,
//   setModules,
// } from "./reducer";
// import { KanbasState } from "../../store";
// import * as client from "../Modules/client";


// function ModuleList() {
//    const handleDeleteModule = (moduleId: string) => {
//     client.deleteModule(moduleId).then((status) => {
//       dispatch(deleteModule(moduleId));
//     });
//   };

//   const { courseId } = useParams();
//   console.log("courseid is : ", courseId);
//   useEffect(() => {
//     client.findModulesForCourse(courseId)
//       .then((modules) =>
//         dispatch(setModules(modules))
//     );
//   }, [courseId]);
//   const handleAddModule = () => {
//     client.createModule(courseId, module).then((module) => {
//       dispatch(addModule(module));
//     });
//   };

//   const handleUpdateModule = async () => {
//     const status = await client.updateModule(module);
//     dispatch(updateModule(module));
//   };

//   // const [moduleList, setModuleList] = useState(() => modules.filter((module) => module.course === courseId));
//   const moduleList = useSelector((state: KanbasState) => 
//   state.modules.modules);
//  const module = useSelector((state: KanbasState) => 
//   state.modules.module);
//  const dispatch = useDispatch();
//   return (
//     <div className="container-fluid">
//       <div className="d-flex justify-content-end gap-1 mb-2">
//       <button type="button" className="btn btn-outline-dark rounded-0">Collapse All</button>
//         <button type="button" className="btn btn-outline-dark rounded-0">View Progress</button>
        
//         <div className="dropdown">
//           <button className="btn btn-outline-dark rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//             <i className="fa fa-check-circle-o wd-fg-color-green"></i> Publish All
//           </button>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
//             <li><a className="dropdown-item" href="#">UnPublish</a></li>
//           </ul>
//         </div>
//         <button type="button" className="btn btn-danger rounded-0">+ Modules</button>
//         <button type="button" className="btn btn-outline-dark rounded-0"><i className="fa fa-ellipsis-v"></i></button>
//       </div>
//       <hr />
//       <div className="d-flex justify-content-end gap-1 mb-2">
//       {/* Input fields */}
//       <input
//         type="text"
//         value={module.name}
//         placeholder="Module name"
//         onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
//         className="module-name-input"
//       />
//       <input
//         type="text"
//         value={module.description}
//         placeholder="Module description"
//         onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
//         className="module-description-input"
//       />

//       {/* Buttons */}
//         <button 
//          type="button"
//          className="btn btn-success float-end"
//          onClick={handleAddModule}>
//           Add
//         </button>
//         <button 
//          type="button"
//          className="btn btn-primary float-end"
//          onClick={handleUpdateModule}>
//           Update
//         </button>
//     </div>
//     <hr />

//     <ul className="list-group wd-modules">
//       {moduleList
//         .filter((module: any) => module.course === courseId)
//         .map((module: any, index) => (
//           <li key={module._id} className="list-group-item">
//             <button
//               type="button"
//               className="btn btn-success float-end"
//               onClick={() => dispatch(setModule(module))}>
//               Edit
//             </button>
//             <button
//                type="button"
//                className="btn btn-danger float-end"
//               onClick={() => handleDeleteModule(module._id)}>
//               Delete
//             </button>
//             <h3>{module.name}</h3>
//             <p>{module.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default ModuleList;
