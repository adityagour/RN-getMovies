import { FETCH_MOVIES } from '../constant';

const initialState = {
    moviesData: null,
}

export default movies = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                moviesData: action.payload
            }
        default:
            return state;
    }

}