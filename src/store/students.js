import axios from 'axios';
//reducer
const students = (state = [], action)=> {
  switch (action.type){
    case 'SET_STUDENTS':
      return action.students;
    case 'CREATE_STUDENT':
      return [action.student,...state];
    case 'UPDATE_STUDENT':
      return state.map(student=>student.id === action.student.id ? action.student : student);
    case 'DELETE_STUDENT':
      return state.filter(student => student.id !== action.student.id);
    default:
      return state;
  }
};

//thunk creators
//fetch
export const fetchStudents = () => {
  return async(dispatch) => {
    const {data} = await axios.get('/api/students/')
    dispatch({type: "SET_STUDENTS", students:data})
  }
};

//create
export const createStudent = (student) => {
  return async(dispatch) => {
    const {data} = await axios.post('/api/students/',student)
    dispatch({type: "CREATE_STUDENT", student:data})
  }
};

//update
export const updateStudent = (student)=> {
  return async(dispatch)=> {
    const {data} = await axios.put(`/api/students/${student.id}`, student);
    dispatch({ type: 'UPDATE_STUDENT', student:data});
  };
};

//delete
export const deleteStudent = (student) => {
  return async (dispatch) => {
    await axios.delete(`/api/students/${student.id}`);
    dispatch({type: 'DELETE_STUDENT',student});
  };
};

export default students