import classes from './ResultsList.module.css';

const img_path = 'https://image.tmdb.org/t/p/original/';

const ResultList = (props) => {
    console.log(props.movies);
    return (
        <div className='container'>
            {props.movies && props.movies.length > 0 ?
                <ul className='d-flex flex-wrap gap-3'>
                    {props.movies.map((movie, index) => {
                        return <li key={movie.id} style={{width: '140px'}}>
                            <img className='w-100 h-100 object-fit-cover' src={`${img_path}${movie.backdrop_path || movie.poster_path}`} alt='...' />
                        </li>
                    })}
                </ul> :
                <p className='text-white fs-2'>Không tìm thấy trong tài liệu nào.</p>}
        </div>
    )
};

export default ResultList;