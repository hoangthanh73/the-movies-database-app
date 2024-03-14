import { useState } from 'react';
import MovieItem from './MovieItem';
import MovieDetail from '../movieDetail/MovieDetail';
import classes from './CategoryMovie.module.css';

const CategoryMovie = ({ movies, title }) => {
    // tạo state movieDetail
    const [movieDetail, setMovieDetail] = useState({});

    // hàm xử lý khi click vào từng bộ phim
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

            {/* kiểm tra nếu không phải original thì lấy backdrop_img còn originals thì lấy poster */}
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

            {/* nếu có movieDetail thì hiện thị MovieDetail Component */}
            {movieDetail.id && <MovieDetail movieDetail={movieDetail} />}
        </div>
    )
};

export default CategoryMovie;