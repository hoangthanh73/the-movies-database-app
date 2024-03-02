import useFetch from "../../hooks/FetchMovies";
import classes from './Banner.module.css';
import { base_path, requests, img_path } from '../../LinkRequest';

const Banner = () => {
    const obj = useFetch(`${base_path}${requests.fetchNetflixOriginals}`);
    console.log(obj)
    let randomMovie = {};

    const movies = obj.data.results;
    if (movies) {
        randomMovie = movies[Math.floor(Math.random() * movies.length) - 1];
    }

    return (
        randomMovie && (
            <div className='overflow-hidden position-relative'>
                <div className='container'>
                    <div className={`${classes.content} position-absolute top-50 translate-middle-y`}>
                        <h1 className='h1 mb-4'>{randomMovie.name}</h1>
                        <button className="btn btn-dark">Play</button>
                        <button className="btn btn-dark ms-2">My List</button>
                        <p className={`${classes.desc} mt-1`}>{randomMovie.overview}</p>
                    </div>
                </div>
                <img src={`${img_path}${randomMovie.backdrop_path}`} alt='...' className='w-100 vh-100 object-fit-cover' />
            </div>
        )
    )
};

export default Banner;