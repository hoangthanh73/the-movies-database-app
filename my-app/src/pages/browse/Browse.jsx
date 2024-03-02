import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import MovieList from './movieList/MovieList';

function Browse() {
	return (
		<div className='bg-dark'>
			<Navbar />
			<Banner />
			<MovieList />
		</div>
	);
}

export default Browse;

