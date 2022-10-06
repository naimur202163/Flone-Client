import { combineReducers } from "redux";
import { usersReducers } from "./userReducer";




const reducers=combineReducers({
    allUsers:usersReducers,
   
})



export default reducers;