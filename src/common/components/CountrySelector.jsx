import React from 'react'
import { Link } from 'react-router-dom'

function CountrySelector({ country }) {
    return (
        <div className="col-md-2 col-12 col-sm-12 me-2 mb-3">
            <Link to={`/country/` + country.toLowerCase().replace(/ /g, '_')}>
                <div className="btn btn-secondary" style={{ width: '100%'}}>
                    {country}
                </div>
            </Link>
        </div>
    )
}

export default CountrySelector