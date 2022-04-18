import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SearchInput() {
    const navigate = useNavigate();

    const { pathname } = useLocation();
    let _keyword_ = pathname.replace('/search/', '').split('/')[0];

    function Search() {
        let keyword = document.querySelector('#search-input').value.split('/')[0];
        if(keyword.trim() === '') return alert('Search input is required!');
        document.querySelector('#search-input').value = keyword;
        navigate(`/search/${encodeURI(keyword)}`)
    }

    function handleKeyUp(e) {
        if(e.which === 13) {
            Search();
        }
    }

    return (
        <div className="container mt-3 mb-3">
            <div className="d-flex justify-content-center mb-3">
                <h3>INDOXXI CINEMA</h3>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <div className="col-8">
                    <div className="input-group mb-3">
                        <input id="search-input" type="text" className="form-control" onKeyUp={e => handleKeyUp(e)} defaultValue={decodeURI(_keyword_)} placeholder="Search.." />
                        <button className="btn btn-outline-secondary" onClick={Search} type="button" id="button-addon1">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchInput;