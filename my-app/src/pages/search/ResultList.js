import { useState } from "react";

import MovieDetail from '../../pages/browse/movieDetail/MovieDetail';
import { img_path } from "../../LinkRequest";
import replace_img from '../../images/movies-hollywood-movies-wallpaper-02415240ad966efb1a18f205f0a89912.jpg';
import classes from './ResultList.module.css';

const ResultList = (props) => {
    // state movieDetail
    const [movieDetail, setMovieDetail] = useState({});

    // Thay đổi movieDetail
    const handlerClick = (movie) => {
        setMovieDetail({});

        if (movie.id === movieDetail.id) {
            return;
        } else {
            setMovieDetail(movie);
        }
    };
    return (
        <div className='container'>

            {/* kiểm trao nếu có movies thì hiện thị ra giao diện */}
            {props.movies && props.movies.length &&
                <ul className='d-flex flex-wrap gap-3'>
                    {props.movies.map((movie) => {
                        const img = movie.backdrop_path || movie.poster_path;
                        return <li
                            key={movie.id}
                            style={{ width: '140px', minHeight: '200px' }}
                            className={classes.item}
                            onClick={() => handlerClick(movie)} >
                            <img className='w-100 h-100 object-fit-cover' src={img ? `${img_path}${img}` : replace_img} alt='...' />
                        </li>
                    })}
                </ul>}

            {/* khi có movieDetail thì hiện thị MovieDetail Component */}
            {movieDetail.id && <MovieDetail movieDetail={movieDetail} />}
        </div>
    )
};

export default ResultList;