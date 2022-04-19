import React from 'react'
import DetailsTable from '../common/components/DetailsTable'

function MovieDetails({ result }) {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-start">
                <div className="col-md-2 me-4">
                    <img src={result.thumbnail} alt={result.title + ' Poster'} />
                </div>
                <div className="col-md-10 ms-2">
                    <h2>{result.title}</h2>
                    <h5 className="text-secondary">{result.year}</h5>
                </div>
            </div>
            <div className="mt-3 mb-3">
                <div className="col ms-3">
                    <h4 className="text-dark">Sinopsis</h4>
                    <hr />
                </div>
                <div className="col">
                    <div className="text-align-start ms-2">
                        {result.sinopsis}
                    </div>
                </div>
            </div>
            <DetailsTable result={result} />
        </div>
    )
}

export default MovieDetails