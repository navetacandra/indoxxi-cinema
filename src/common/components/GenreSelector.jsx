import React from 'react'
import { Link } from 'react-router-dom'

function GenreSelector({ genre }) {
    return (
        <div className="col-md-2 col-12 col-sm-12 me-2 mb-3">
            <Link to={`/genre/` + genre.toLowerCase()}>
                <div className="btn btn-secondary" style={{ width: '100%' }}>
                    {genre}
                </div>
            </Link>
        </div>
    )
}

export default GenreSelector