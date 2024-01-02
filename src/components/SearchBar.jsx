import { useEffect, useRef, useState } from 'react';

function SearchBar({searchWeather,startLoading}) {
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(search){
            startLoading();
            searchWeather(search);
            setSearch('');
            inputRef.current.blur();
        }
    }
    useEffect(() => {
        inputRef.current.focus();
    },[]);
    return (
        <form onSubmit={handleSubmit} className="d-flex gap-4" role="search">
            <input className="form-control fs-5" ref={inputRef} type="search" placeholder="Enter Your Location" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="btn rounded-circle search d-flex justify-content-center align-items-center" type="submit"><i className="fa-solid fa-magnifying-glass fs-4"></i></button>
        </form>
    )
}
export default SearchBar;