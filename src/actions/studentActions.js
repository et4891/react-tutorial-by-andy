import axios from 'axios';

const STUDENT_API = 'https://webdxd-student-api.herokuapp.com/student';

export const addStudent = firstName => {
  return async dispatch => {
    const res = await axios.post(STUDENT_API, {firstName});
    console.log('post return');
    console.log(res);
    dispatch({
      type: 'ADD_STUDENT',
      payload: res.data
    })
  }
};

export const fetchStudents = () => {
  return async dispatch => {
    const res = await axios.get(STUDENT_API);
    dispatch({
      type: 'FETCH_STUDENTS',
      payload: res.data
    })
  }
};