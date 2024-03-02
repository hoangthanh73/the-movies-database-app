import { useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import Detail from '../movieDetail/MovieDetail';
import classes from './CategoryMovie.module.css';

const CategoryMovie = ({ movies, title }) => {
    const [movieDetail, setMovieDetail] = useState({});
    // const [toggleDetail, setToggleDetail] = useState(false);

    const handlerClick = (movie) => {
        setMovieDetail({});

        if (movie.id === movieDetail.id) {
            return;
        } else {
            setMovieDetail(movie);
        }
    };

    return (
        <div className='pb-5'>
            {title && <h3 className='h3 text-white'>{title}</h3>}
            <div className={`${classes['category-inner']} ${title ? classes.scrollbar : ''}`}>
                <ul className='d-flex gap-2 flex-nowrap ps-0'>
                    {movies.map(movie =>
                        <MovieItem key={movie.id}
                            src={title ? movie.backdrop_path : movie.poster_path}
                            width={title ? { width: '180px' } : { width: '120px' }}
                            movieData={movie}
                            onClick={handlerClick}
                        />
                    )}
                </ul>
            </div>
            {movieDetail.id && <Detail movieDetail={movieDetail} />}
        </div>
    )
};

export default CategoryMovie;