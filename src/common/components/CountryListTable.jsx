import React from 'react'
import { Link } from 'react-router-dom';

function CountryListTable({ countries }) {
    return (
        countries.map((val, key) => {
            return (
                <>
                    <Link to={process.env.PUBLIC_URL + '/country/' + val} style={{ textDecoration: 'none', color: '#A46707' }}>
                        {val}
                    </Link>
                    {key !== (countries.length - 1) ? ', ' : ''}
                </>
            )
        })
    )
}

export default CountryListTable