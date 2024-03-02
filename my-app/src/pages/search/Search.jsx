import { useState } from 'react';

import React from 'react';
import useFetch from '../../hooks/FetchMovies';
import Navbar from '../browse/Navbar';
import SearchForm from './SearchForm';
import ResultList from './ResultList';


// const searchTerm = 'test'
// const API_KEY = 'c91bf466435375af6fa9b92602aed36f';
// const searchApi = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${API_KEY}`

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [dataResults, setDataResults] = useState([]);

	const API_KEY = 'c91bf466435375af6fa9b92602aed36f';
	const searchApi = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${API_KEY}`;

	const { data } = useFetch(searchApi);

	const updatedSearchTerm = (value) => {
		setSearchTerm(value);
		console.log(searchTerm);
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
