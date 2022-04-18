import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetEmbed from '../api-config/GetEmbed';
import Details from '../modules/Details';

function Play() {
    const [fetched, setFetched] = useState(false);
    const [data, setData] = useState({});

    let params = useParams();
    let id = params.id ? `${params.type}/${params.id}` : '';

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
                                <Details result={data.result} />
                            </>
                        ) : null
                    ) : null
                ) : (
                    <h1>Hello World</h1>
                )
            }
        </>
    )
}

export default Play