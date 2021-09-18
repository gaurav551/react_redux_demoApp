import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const errorHandlingMiddleware = ({ dispatch, getState }) => next => action => {

    //Error Handling Logic
    if (action.error) {
        // if (action.error.response && action.error.response.status === 401) {
        //     dispatch(LoginCreatorRedux.isLoggedIn(false))
        // }
        // if (action.type != WellWishersTypes.FAILURE && action.type != CorporateWellWishersTypes.FAILURE &&
        //     action.type != WishOthersTypes.FAILURE && action.type != WishOthersAllTypes.FAILURE &&
        //     action.type != RaveEmployeeSearchTypes.FAILURE && action.type != RaveWitnessSearchTypes.FAILURE &&
        //     action.type != SDMReduxTypes.FAILURE &&
        //     action.type != SET_SUBMIT_FAILED) {
        //     dispatch(GlobalErrorRedux.success(action.error));
        // }
    }

    // Call the next dispatch method in the middleware chain.
    const nextAction = next(action)
    return nextAction
}

const getAppStore = () => createStore(rootReducer, applyMiddleware(errorHandlingMiddleware, thunk));

export default getAppStore;
