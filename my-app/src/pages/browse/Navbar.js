import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import IconSearch from "../../ICON/IconSearch";

const Navbar = () => {
    const [scrollValue, setScrollValue] = useState(0);
    const onScroll = () => setScrollValue(window.scrollY);
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    }, [scrollValue]);

    return (
        <div className={`${scrollValue > 100 ? 'bg-dark' : 'bg-transparent'} position-fixed w-100 top-0 z-3`}>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/' className='h2 text-decoration-none text-danger'>Movie App</Link>
                    <Link to='/search'>
                        <IconSearch />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;