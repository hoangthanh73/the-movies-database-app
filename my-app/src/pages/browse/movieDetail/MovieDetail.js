import YouTube from 'react-youtube';
import useFetch from '../../../hooks/FetchMovies';
import { img_path, API_KEY } from '../../../LinkRequest';

const MovieDetail = (props) => {

    const url = `https://api.themoviedb.org/3/movie/${props.movieDetail.id}/videos?api_key=${API_KEY}`;

    const { data } = useFetch(url);
    console.log(data);

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-6 text-white'>
                    <h2 className='h2 border-bottom border-2 pb-3 mb-4'>{props.movieDetail.name || props.movieDetail.title}</h2>
                    <div style={{ fontSize: '18px' }}>
                        <p className='mb-0'><strong>Release Date: {props.movieDetail.first_air_date}</strong></p>
                        <p><strong>Vote: {props.movieDetail.vote_average} / 10</strong></p>
                    </div>
                    <p>{props.movieDetail.overview}</p>
                </div>
                <div className='col-md-6'>
                    {data.results && data.results.length > 0 ? <YouTube videoId={`${data.results[0].key}`} opts={opts} /> :
                        <img className='w-100 h-100' src={`${img_path}${props.movieDetail.backdrop_path}`} />}
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;