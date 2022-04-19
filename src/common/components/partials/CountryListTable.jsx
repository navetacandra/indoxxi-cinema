import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

function CountryListTable({ countries }) {
    return (
        countries.map((val, key) => {
            return (
                <Fragment key={key}>
                    <Link to={process.env.PUBLIC_URL + '/country/' + val} style={{ textDecoration: 'none', color: '#A46707' }}>
                        {val}
                    </Link>
                    {key !== (countries.length - 1) ? ', ' : ''}
                </Fragment>
            )
        })
    )
}

export default CountryListTable