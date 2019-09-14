import React, { Component } from 'react';
import MovieView from './movieView'
import { connect } from 'react-redux'
import { fetchMovies } from '../redux/action/movies';

class MovieContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 1,
            loading: true,
            loadingMore: false,
            error: null,
            dataFetch: true
        }

    }

    componentDidMount() {
        const data = this.props.fetchMovies(this.state.page)
    }

    shouldComponentUpdate(props, state) {
        if (props.dataMovie != null) {
            this.setDataInMovie(props.dataMovie)
        }
        return true;
    }

    /*** Set Movies Data***/
    setDataInMovie(dataMovie) {
        if (this.state.dataFetch) {
            let dataShow = [...this.state.data, ...dataMovie];
            this.setState({ data: dataShow, dataFetch: false });
        }
    }

    /*** favourites Movie***/
    favourites = (item, index) => {
        item['checked'] = true;
        let data = this.state.data[index].item;
        this.setState({ data: this.state.data })
    }

    /*** unfavourites Movie***/
    unfavourites = (item, index) => {
        item['checked'] = false;
        let data = this.state.data[index].item;
        this.setState({ data: this.state.data })
    }

    /*** Load More Data ***/
    handleLoadMore = () => {
        setTimeout(() => {
            this.setState(
                (prevState) => ({
                    page: prevState.page + 1,
                    loadingMore: true,
                    dataFetch: true
                }),
                () => {
                    this.props.fetchMovies(this.state.page);
                }
            )
        }, 3000);

    };

    render() {
        const { data } = this.state
        return (
            <MovieView
                handleLoadMore={() => this.handleLoadMore()}
                movieData={data}
                favourites={(e1, e2) => this.favourites(e1, e2)}
                unfavourites={(e1, e2) => this.unfavourites(e1, e2)} />
        )
    }
}

const mapStateToProps = (state) => ({ dataMovie: state.movies.moviesData })


export default connect(mapStateToProps, { fetchMovies })(MovieContainer)