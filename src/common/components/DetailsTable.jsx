import React from 'react'
import CountryListTable from './CountryListTable'
import GenreListTable from './GenreListTable'

function DetailsTable({ result }) {
    return (
        <div className="justify-content-start mt-5">
            <div className="col-12">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="col">Genre</th>
                            <th scope="col">: <GenreListTable genre_list={result.genre} /></th>
                        </tr>
                        <tr>
                            <th scope="col">Actor</th>
                            <th scope="col">: {result.actor.join(', ')}</th>
                        </tr>
                        <tr>
                            <th scope="col">Director</th>
                            <th scope="col">: {result.director.join(', ')}</th>
                        </tr>
                        <tr>
                            <th scope="col">Duration</th>
                            <th scope="col">: {(result.duration === '0') ? '-' : result.duration + ' Minutes'}</th>
                        </tr>
                        <tr>
                            <th scope="col">Quality</th>
                            <th scope="col">: {result.quality}</th>
                        </tr>
                        <tr>
                            <th scope="col">Countries</th>
                            <th scope="col">: <CountryListTable countries={result.country} /></th>
                        </tr>
                        <tr>
                            <th scope="col">Rating</th>
                            <th scope="col" style={{ textShadow: '0 0 2px rgb(0 0 0 / 60%)' }}>:
                            <span className="ms-1 me-1" style={{ color: '#FFCD3C' }}>&#9733;</span>
                            {result.rating}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DetailsTable