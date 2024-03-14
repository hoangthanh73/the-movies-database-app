import classes from './MovieItem.module.css';
import { img_path } from '../../../LinkRequest';
import img from '../../../images/movies-hollywood-movies-wallpaper-02415240ad966efb1a18f205f0a89912.jpg';

const MovieItem = (props) => {
    return (
        <li className={classes.item}
            style={props.width}
            onClick={() => { props.onClick(props.movieData) }}>
            <img src={props.src ? `${img_path}${props.src}` : img} className='w-100 h-100' />
        </li>
    )
};

export default MovieItem;