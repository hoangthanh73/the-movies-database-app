import useFetch from '../../../hooks/FetchMovies';
import CategoryMovie from './CategoryMovie';
import { requests, base_path } from '../../../LinkRequest';

const MovieList = () => {

    // hàm lấy danh sách phim từ data trả về
    const getMovies = (data) => {
        return data.results;
    };

    // 1. original
    const { isLoading: originalIsLoadding, data: originalData, error: originalError } =
        useFetch(`${base_path}${requests.fetchNetflixOriginals}`);
    const originalMovies = getMovies(originalData);

    // 2. trending
    const { isLoading: trendingIsLoadding, data: trendingData, error: trendingError } =
        useFetch(`${base_path}${requests.fetchTrending}`);
    const trendingMovies = getMovies(trendingData);

    // 3.topRated
    const { isLoading: topRatedIsLoadding, data: topRatedData, error: topRatedError } =
        useFetch(`${base_path}${requests.fetchTopRated}`);
    const topRatedMovies = getMovies(topRatedData);

    // 4. action
    const { isLoading: actionIsLoadding, data: actionData, error: actionError } =
        useFetch(`${base_path}${requests.fetchActionMovies}`);
    const actionMovies = getMovies(actionData);

    // 5. comedy
    const { isLoading: comedyIsLoadding, data: comedyData, error: comedyError } =
        useFetch(`${base_path}${requests.fetchComedyMovies}`);
    const comedyMovies = getMovies(comedyData);

    // 6. horror
    const { isLoading: horrorIsLoadding, data: horrorData, error: horrorError } =
        useFetch(`${base_path}${requests.fetchHorrorMovies}`);
    const horrorMovies = getMovies(horrorData);

    // 7.romance
    const { isLoading: romanceIsLoadding, data: romanceData, error: romanceError } =
        useFetch(`${base_path}${requests.fetchRomanceMovies}`);
    const romanceMovies = getMovies(romanceData);

    // 8. documentaries
    const { isLoading: documentariesIsLoadding, data: documentariesData, error: documentariesError } =
        useFetch(`${base_path}${requests.fetchDocumentaries}`);
    const documentariesMovies = getMovies(documentariesData);

    return (
        <div className='container py-5'>
            {originalMovies && <CategoryMovie movies={originalMovies} title='' />}
            {trendingMovies && <CategoryMovie movies={trendingMovies} title='Xu Hướng' />}
            {topRatedMovies && <CategoryMovie movies={topRatedMovies} title='Xếp hạng cao' />}
            {trendingMovies && <CategoryMovie movies={trendingMovies} title='Hành động' />}
            {comedyMovies && <CategoryMovie movies={comedyMovies} title='Hài' />}
            {horrorMovies && <CategoryMovie movies={horrorMovies} title='Kinh dị' />}
            {romanceMovies && <CategoryMovie movies={romanceMovies} title='Lãng mạn' />}
            {documentariesMovies && <CategoryMovie movies={documentariesMovies} title='Tài liệu' />}
        </div>
    )
};

export default MovieList;