import useFetch from "../../hooks/FetchMovies";
import classes from './Banner.module.css';
import { base_path, requests, img_path } from '../../LinkRequest';

const Banner = () => {

    // gọi api bằng useFetch hooks
    const obj = useFetch(`${base_path}${requests.fetchNetflixOriginals}`);

    // khởi tạo randomMovie
    let randomMovie = {};

    // sau khi fetch data thành công thì gán lại random Movie
    const movies = obj.data.results;
    if (movies) {
        randomMovie = movies[Math.floor(Math.random() * movies.length) - 1];
    }

    return (
        // nếu có randomMovie thì tiến hành render lại giao diện
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
                <div className='vw-100 vh-100'>
                    <img src={img_path + randomMovie.backdrop_path} alt='...' className='object-fit-cover w-100 h-100' />
                </div>
            </div>
        )
    )
};

export default Banner;