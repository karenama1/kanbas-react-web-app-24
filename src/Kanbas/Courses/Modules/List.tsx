import React, { useState } from "react";
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
} from "./reducer";
import { KanbasState } from "../../store";

// 


function ModuleList() {
  const { courseId } = useParams();
  // const [moduleList, setModuleList] = useState(() => modules.filter((module) => module.course === courseId));
  const moduleList = useSelector((state: KanbasState) => 
  state.modules.modules);
 const module = useSelector((state: KanbasState) => 
  state.modules.module);
 const dispatch = useDispatch();
  // const modulesList: Module[] = modules.filter((module) => module.course === courseId);
  // const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  // const [module, setModule] = useState({
  //   _id:'',
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });
  // const addModule = (module: any) => {
  //   const newModule = { ...module,
  //     _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };
  // const deleteModule = (moduleId: string, event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault(); // Prevent default action
  //   event.stopPropagation(); // Stop event from bubbling up

  //   const newModuleList = moduleList.filter(
  //     (mod) => mod._id !== moduleId );
  //   setModuleList(newModuleList);
  // };
  // const updateModule = () => {
  //   // You might want to check if 'module' has a valid '_id' before doing the update
  //   if (!module._id) return;
  
  //   setModuleList((currentModuleList) =>
  //     currentModuleList.map((m) => {
  //       if (m._id === module._id) {
  //         // If the module is the one we're editing, return the updated module
  //         // Also, preserve or handle the 'lessons' property correctly
  //         return {
  //           ...m, // spread the properties of the current module
  //           name: module.name, // update the name
  //           description: module.description, // update the description
  //           // if there are any other properties that need to be updated, do so here
  //         };
  //       } else {
  //         // Otherwise, return the module as is
  //         return m;
  //       }
  //     })
  //   );
  // };  
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end gap-1 mb-2">
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
      <input
        type="text"
        value={module.description}
        placeholder="Module description"
        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        className="module-description-input"
      />

      {/* Buttons */}
        <button 
         type="button"
         className="btn btn-success float-end"
         onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button 
         type="button"
         className="btn btn-primary float-end"
         onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
    </div>
    <hr />

    <ul className="list-group wd-modules">
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
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
              onClick={() => dispatch(deleteModule(module._id))}>
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
