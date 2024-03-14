import { useState } from 'react';

import React from 'react';
import useFetch from '../../hooks/FetchMovies';
import Navbar from '../browse/Navbar';
import SearchForm from './SearchForm';
import ResultList from './ResultList';
import { API_KEY } from '../../LinkRequest';

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const searchApi = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${API_KEY}`;

	const { data } = useFetch(searchApi);

	const updatedSearchTerm = (value) => {
		setSearchTerm(value);
	}

	return (
		<div className='bg-dark' style={{minHeight: '100vh'}}>
			<Navbar />
			<div className='py-5'>
				<SearchForm updatedSearchTerm={updatedSearchTerm} />
				<ResultList movies={data.results} />
			</div>
		</div >
	);
};

export default Search;
