import { combineReducers } from "redux";
import registerFormRedux from "../redux/registerFormRedux";
//this is rootReducer to combine all reducers from redux
import todoRedux from "../redux/todoRedux";

export const rootReducer = combineReducers({
    todoData: todoRedux,
    registerFormData : registerFormRedux,
})
