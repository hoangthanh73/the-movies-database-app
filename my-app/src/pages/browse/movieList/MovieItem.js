import classes from './MovieItem.module.css';

const MovieItem = (props) => {
    const img_path = 'https://image.tmdb.org/t/p/original/';
    return (
        <li className={classes.item}
            style={props.width}
            onClick={() => {props.onClick(props.movieData)}}>
            <img src={`${img_path}${props.src}`} className='w-100 h-100' />
        </li>
    )
};

export default MovieItem;