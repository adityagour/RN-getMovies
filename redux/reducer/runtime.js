import { SET_RUNTIME_VARIABLE } from '../constant';

export default runtime = (state = {}, action) => {
    switch (action.type) {
        case SET_RUNTIME_VARIABLE:
            return {
                ...state,
                [action.payload]: action.payload,
            }
        default:
            return state;
    }
}