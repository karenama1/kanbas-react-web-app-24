import axios from 'axios';
import { AnyCnameRecord } from 'dns';
const COURSES_API = "http://localhost:4000/api/courses";
const ASSIGNMENT_API = "http://localhost:4000/api/assignments";

export const updateAssignment = async (assignmentId: any, assignment: any) => {
    const response = await axios.
      put(`${ASSIGNMENT_API}/${assignmentId}`, assignment);
    return response.data;
  };

export const deleteAssignment = async (assignmentId: any) => {
  const response = await axios
    .delete(`${ASSIGNMENT_API}/${assignmentId}`);
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: any) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data
}

export const createAssignment = async (courseId: any, assignment: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`, assignment);
         return response.data;
}

export const findAssignmentById = async (assignmentId: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/${assignmentId}`);
  return response.data;
};



  