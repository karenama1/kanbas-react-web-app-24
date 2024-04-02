import axios from "axios";
const COURSES_API = "http://localhost:4000/api/courses";


export const findAllCourses = async (courseid: any) => {
   const response = await axios.get(`${COURSES_API}/courses`);
   return response.data;
};

export const createCourse = async (courseId: any) => {
   const response = await axios.post(`${COURSES_API}/${courseId}`);
   return response.data
}

export const updateCourse = async(courseId: any) => {
  const response = await axios.put(`${COURSES_API}/${courseId}`);
  return response.data

}

export const deleteCourse = async (courseId: any) =>  {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    return response.data
}
