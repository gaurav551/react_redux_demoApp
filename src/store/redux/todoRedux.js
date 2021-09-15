import { createActions } from 'reduxsauce';
import { createReducer } from 'reduxsauce';
import { todoService } from '../../services/todoService';

const INITIAL_STATE = { todoData: null, isLoading: true, error: null };

export const { Types, Creators } = createActions(
    {
        isLoading: null,
        success: ['todoData'],
        failure: ['error'],
        load: () => {
            return (dispatch, getState) => {
                load(dispatch, {});
            };
        }
    },
    { prefix: 'TodoData_' }
);

export const load = (dispatch, action) => {
    
    dispatch(Creators.isLoading());
    let service = new todoService();
    service.getTodo()
        .then(response => {
            dispatch(Creators.success(response.data));
        })
        .catch(error => {
            dispatch(Creators.failure(error));
        });
};

export const deleteTodo = (dispatch, action) => {
    
    
   
    console.log("delete todo");
};

export const success = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        todoData: action.todoData,
        error: null,
        isLoading: false
    };
};

export const failure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        todoData: null,
        error: action.error,
        isLoading: false
    };
};

export const isLoading = (state = INITIAL_STATE, action) => {
    return { ...state, isLoading: true };
};

export const HANDLERS = {
    [Types.IS_LOADING]: isLoading,
    [Types.SUCCESS]: success,
    [Types.FAILURE]: failure
};

export default createReducer(INITIAL_STATE, HANDLERS);
