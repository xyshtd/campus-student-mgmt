import axios from 'axios';
//reducer
const campuses = (state = [], action)=> {
  switch (action.type){
    case 'SET_CAMPUSES':
      return action.campuses;
    case 'CREATE_CAMPUS':
      return [action.campus,...state];
    case 'UPDATE_CAMPUS':
      return state.map(campus=>campus.id === action.campus.id ? action.campus : campus);
    case 'DELETE_CAMPUS':
      return state.filter(campus => campus.id !== action.campus.id);
    default:
      return state;
  }
};

//thunk creators
//fetch
export const fetchCampuses = () => {
  return async(dispatch) => {
    const {data} = await axios.get('/api/campuses/')
    dispatch({type: "SET_CAMPUSES", campuses:data})
  }
};

//create
export const createCampus = (campus) => {
  return async(dispatch) => {
    const {data} = await axios.post('/api/campuses/',campus)
    dispatch({type: "CREATE_CAMPUS", campus:data})
  }
};

//update
export const updateCampus = (campus)=> {
  return async(dispatch)=> {
    const {data} = await axios.put(`/api/campuses/${campus.id}`, campus);
    dispatch({ type: 'UPDATE_CAMPUS', campus:data});
  };
};

//delete
export const deleteCampus = (campus) => {
  return async (dispatch) => {
    await axios.delete(`/api/campuses/${campus.id}`);
    dispatch({type: 'DELETE_CAMPUS',campus});
  };
};

export default campuses