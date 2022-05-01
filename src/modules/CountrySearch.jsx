import React, { useState, useEffect } from 'react'
import GetCountry from '../api/GetCountry';
import Loading from '../common/components/Loading';
import MovieCard from '../common/components/MovieCard';
import ResultPagination from '../common/components/ResultPagination';

function CountrySearch({ country }) {
    const [fetched, setFetched] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [result, setResult] = useState([]);

    useEffect(() => {
        async function getData() {
            setFetched(false);
            let res = await GetCountry(country)
            setData(res ? res.status === 'success' ? res.result : [] : []);
            setFetched(true);
        }

        if (country.trim()) {
            getData();
        }
    }, [country])

    useEffect(() => {
        let limit = [page * 20 - 20, page * 20];
        if (data && !!data.length) {
            setResult(data.slice(limit[0], limit[1]));
        }
    }, [data, page])

    return (
        <>
            {
                fetched ? (
                    data && data[0] ? (
                        <>
                            <ResultPagination className='mb-3' result={data} setPage={setPage} page={page} />
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
                            <ResultPagination className='mb-3' result={data} setPage={setPage} page={page} />
                        </>
                    ) : (
                        <div className="d-flex justify-content-center">
                            <h2>Result not found!</h2>
                        </div>
                    )
                ) : (
                    <div className="d-flex justify-content-center">
                        <Loading />
                    </div>
                )
            }
        </>
    )
}

export default CountrySearch