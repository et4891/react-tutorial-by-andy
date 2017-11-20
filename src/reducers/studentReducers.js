const StudentReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return [...state, action.payload];
    case 'FETCH_STUDENTS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default StudentReducer;