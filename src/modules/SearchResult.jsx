import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Loading from '../common/components/Loading';
import GetSearch from '../api/GetSearch';
import MovieCard from '../common/components/MovieCard';
import ResultPagination from '../common/components/ResultPagination';

function SearchResult() {
    const [fetched, setFetched] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [result, setResult] = useState([]);

    const { pathname } = useLocation();
    let params = useParams();
    const _keyword_ = params.keyword;

    useEffect(() => {

        async function getSearch() {
            setFetched(false);
            let res = await GetSearch(_keyword_)
            setData(res ? res.status === 'success' ? res.result : [] : []);
            setFetched(true);
        }

        if (_keyword_.trim()) {
            getSearch()
        }
    }, [pathname, _keyword_])

    useEffect(() => {
        let limit = [page * 20 - 20, page * 20];
        if (data && !!data.length) {
            setResult(data.slice(limit[0], limit[1]));
        }
    }, [data, page])

    return (
        <>
            {
                _keyword_ ? (
                    fetched ? (
                        data && data[0] ? (
                            <div className="container">
                                <ResultPagination className='mb-3' result={data} setPage={setPage} page={page} />
                                <div className="row justify-content-start">
                                    {
                                        result.map((val, key) => (
                                            <MovieCard
                                                id={'/' + val.id}
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
                                <ResultPagination className='mt-3' result={data} setPage={setPage} page={page} />
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
                        </div>
                    )
                ) : null
            }
        </>
    )
}

export default SearchResult