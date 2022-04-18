import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Loading from '../common/components/Loading';
import _Search from '../utils/_Search';
import MovieCard from '../common/components/MovieCard';
import ResultPagination from '../common/components/ResultPagination';

function SearchResult() {
    const [keyword, setKeyword] = useState('');
    const [fetched, setFetched] = useState(false);
    const [data, setData] = useState([]);
    const [tempData, setTempData] = useState([]);

    const { pathname } = useLocation();
    const _keyword_ = useParams().keyword;

    useEffect(() => {

        async function getSearch() {
            setTempData(data);
            // setData([]);
            setFetched(false);
            setData(await _Search(keyword));
            setFetched(true);
        }

        if (pathname.startsWith('/search')) {
            _keyword_ ? setKeyword(_keyword_) : setKeyword('');
        }

        if (keyword.trim()) {
            getSearch()
        }
    }, [pathname, keyword])

    useEffect(() => {
        console.log(data === tempData);
        // setFetched(data[0] ? true : false);;
    }, [data])

    return (
        <>
            {
                keyword ? (
                    fetched ? (
                        data && data[0] ? (
                            <div className="container">
                                <div className="row justify-content-start">
                                    <ResultPagination result={data} />
                                </div>
                                <div className="row justify-content-start">
                                    {
                                        data.map((val, key) => (
                                            <MovieCard
                                                id={val.link}
                                                title={val.title}
                                                img={val.img}
                                                year={val.year}
                                                rate={val.rating}
                                                time={val.duration}
                                                quality={val.quality}
                                                type={val.type}
                                                eps={val.eps}
                                                key={key}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className="container">
                                <div className="d-flex justify-content-center">
                                    <h2>Result not found!</h2>
                                </div>
                            </div>
                        )
                    ) : (
                        <div className="container mt-5">
                            <div className="d-flex justify-content-center">
                                <Loading />
                            </div>
                        </div >
                    )
                ) : null
            }
        </>
    )
}

export default SearchResult