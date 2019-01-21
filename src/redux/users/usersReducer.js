import actionsTypes from './usersConstants';

const initialState = {
  users:[],
  userSelected:{
    id:null,
    name:'',
    username:'',
    email:''
  },
  errorMessage: '',
  working: false
};
const usableState = Object.assign({}, initialState);

export default function usersReducer(state = usableState, action) {
  let editedState;
  switch (action.type) {

    case actionsTypes.WORKING:
      editedState = Object.assign({}, state);
      editedState.working = true;
      break;

    default:
      return state;
  }
  return editedState;
}
