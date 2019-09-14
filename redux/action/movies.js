import { FETCH_MOVIES } from '../constant';


/**** Fetch Movies Data ****/

export const fetchMovies = (page) => (dispatch) => {
 fetch(`https://api.themoviedb.org/3/movie/popular?api_key=53c124ed889845f55b58be10bfabe422&language=en-US&page=${page}`)
        .then(res => res.json())
        .then(data => {
         return dispatch({
                type: FETCH_MOVIES,
                payload: data.results
            })
        });
}

/**** End of Fetch Movies Data ****/