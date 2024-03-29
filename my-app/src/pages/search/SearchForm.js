import { useRef } from "react";
import IconSearch from "../../ICON/IconSearch";

const SearchForm = (props) => {
    const inputSearchRef = useRef();

    // event khi click vào reset Btn
    const handlerReset = event => {
        event.preventDefault();
        inputSearchRef.current.value = '';
    }

    // Event khi click vào btn search và btn Icon
    const handlerSearch = (event) => {
        event.preventDefault();
        props.updatedSearchTerm(inputSearchRef.current.value);
        inputSearchRef.current.value = '';
    }


    return (
        <form style={{ maxWidth: '576px', width: '95%' }} className='mx-auto my-5 py-4 bg-white card'>
            <div className="border-bottom border-2 border-primary px-5 pb-2 d-flex align-items-center gap-2">
                <input type="text" placeholder="Search movies" className='border-0 w-100 p-2' ref={inputSearchRef} />
                <button type='button' className='btn' onClick={handlerSearch}>
                    <IconSearch />
                </button>
            </div>
            <div className='px-4 d-flex justify-content-end mt-4 gap-2'>
                <button type='button' className='btn btn-light' onClick={handlerReset}>RESET</button>
                <button type='button' className='btn btn-primary' onClick={handlerSearch}>SEARCH</button>
            </div>
        </form>
    )
};

export default SearchForm;