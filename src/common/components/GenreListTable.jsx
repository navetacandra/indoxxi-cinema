import React from 'react';
import { Link } from 'react-router-dom';

function GenreListTable({ genre_list }) {
    return (
        genre_list.map((val, key) => {
            return (
                <>
                    <Link to={process.env.PUBLIC_URL + '/genre/' + val} style={{ textDecoration: 'none', color: '#A46707' }}>
                        {val}
                    </Link>
                    {key !== (genre_list.length - 1) ? ', ' : ''}
                </>
            )
        })
    )
}

export default GenreListTable