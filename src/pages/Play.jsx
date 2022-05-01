import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GetEmbed from '../api/GetEmbed';
import Loading from '../common/components/Loading';
import EmbedPlayer from '../modules/EmbedPlayer';
import MovieDetails from '../modules/MovieDetails';

function Navigate({ to }) {
    useNavigate()(to);
    return (
        <Fragment></Fragment>
    )
}

function Play() {
    const [fetched, setFetched] = useState(false);
    const [data, setData] = useState({});

    let params = useParams();
    let id = params.id ? params.id : '';

    useEffect(() => {
        document.querySelector('#search-input').value = '';
        async function FetchEmbed() {
            if (!fetched) {
                let res = await GetEmbed(id);
                setData(res);
                setFetched(true);
            }
        }

        FetchEmbed();
    }, [id])


    return (
        <>
            {
                params.id ? (
                    fetched ? (
                        data.result ? (
                            <>
                                <EmbedPlayer result={data.result} />
                                <MovieDetails result={data.result} />
                            </>
                        ) : (
                            <div className="container mt-5">
                                <div className="d-flex justify-content-center">
                                    <h2>No movies found!</h2>
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
                ) : <Navigate to={'/search'} />
            }
        </>
    )
}

export default Play