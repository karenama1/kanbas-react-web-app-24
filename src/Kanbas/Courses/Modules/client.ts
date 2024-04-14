import axios from "axios";

const BASE_API = process.env.REACT_APP_API_BASE_URL;
const COURSES_API = `${BASE_API}/api/courses`;
const MODULES_API = `${BASE_API}/api/modules`;

export const findModulesForCourse = async (courseId: any) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
}

export const createModule = async (courseId: any, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
}

export const deleteModule = async (moduleId:any) => {
const response = await axios
  .delete(`${MODULES_API}/${moduleId}`);
return response.data;
}

export const updateModule = async (module:any) => {
  const response = await axios.
    put(`${MODULES_API}/${module._id}`, module);
  return response.data;
}
 
// export const findModulesForCourse = async (courseId: any) => {
//   const response = await axios
//     .get(`${COURSES_API}/${courseId}/modules`);
//   return response.data;
// }

// export const createModule = async (courseId: any, module: any) => {
//   const response = await axios.post(
//     `${COURSES_API}/${courseId}/modules`,
//     module
//   );
//   return response.data;
// }

// export const deleteModule = async (moduleId:any) => {
//   const response = await axios
//     .delete(`${MODULES_API}/${moduleId}`);
//   return response.data;
// }

// export const updateModule = async (module:any) => {
//   const response = await axios.
//     put(`${MODULES_API}/${module._id}`, module);
//   return response.data;
// }

export const createLesson = async (moduleId: any, lesson: any) => {
    const response = await axios.post(`${MODULES_API}/${moduleId}/lessons`, lesson);
    return response.data;
}

export const deleteLesson = async (moduleId: any, lessonId: any) => {
    const response = await axios.delete(`${MODULES_API}/${moduleId}/lessons/${lessonId}`);
    return response.data;
}

export const updateLesson = async (moduleId: any, lesson: any) => {
    const response = await axios.put(`${MODULES_API}/${moduleId}/lessons/${lesson._id}`, lesson);
}
