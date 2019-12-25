export default function (state = null, action){
  switch(action.type){
    case 'CREATE_PROJECT':
      return null;
    default:
      return state;
  }
}