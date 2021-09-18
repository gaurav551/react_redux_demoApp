import { createActions } from 'reduxsauce';
import { createReducer } from 'reduxsauce';
import { registerFormService } from '../../services/registerFormService';

const INITIAL_STATE = { apiResponse: null, isLoading: true, error: null };

export const { Types, Creators } = createActions(
    {
        isLoading: null,
        success: ['apiResponse'],
        failure: ['error'],
        registerData: (data) => {
            
            return (dispatch, getState) => {
                registerData(dispatch, {data});
            };
        },
       
    },
    { prefix: 'apiResponse_' }
);

export const registerData = (dispatch, action) => {
    
    dispatch(Creators.isLoading());
    let service = new registerFormService();
    service.registerData(action.data)
        .then(response => {
           
            dispatch(Creators.success(response.data));
        })
        .catch(error => {
            dispatch(Creators.failure(error));
        });
};



export const success = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        apiResponse: action.apiResponse,
        error: null,
        isLoading: false
    };
};

export const failure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        apiResponse: null,
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
