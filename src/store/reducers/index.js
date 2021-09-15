import { combineReducers } from "redux";
//this is rootReducer to combine all reducers from redux
import todoRedux from "../redux/todoRedux";
export const rootReducer = combineReducers({
    todoData: todoRedux})
