import React from 'react';
import { Link } from 'react-router-dom';
import '../style/MovieCard.css';

function MovieCard({ id, title, img, year, rate, time, quality, type, eps }) {
    return (
        <div className="col-md-3 col-sm-6 mb-3">
            <div className="card mb-3 me-2 movie-card">
                <Link to={'/play' + id}>
                    <img src={img} className="card-img-top" alt={title + ' Poster'} />
                </Link>
                <div className="card-body">
                    <div className="movie-title ms-1 mb-1">
                        <Link to={'/play' + id} style={{ textDecoration: 'none', color: '#000' }}>
                            <span className="fs-5 text fw-bolder text-dark mb-2">{title}
                            <span className="fs-6 text-secondary"> ({year})</span></span>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-end mb-1">
                        <div className="me-2" style={{ marginTop: '-.3em', textShadow: '0 0 2px rgb(0 0 0 / 60%)' }}>
                        <span className="ms-1" style={{ color: '#FFCD3C' }}>&#9733;</span>{` ${rate}`}
                        </div>
                    </div>
                    <div className="movie-duration d-flex justify-content-end mb-3" style={{ marginTop: '-.5em' }}>
                        <span className="fs-6 text me-2">{time === '0' ? '-' : time + ' Minutes'}</span>
                    </div>
                    <div className="badge-list ms-1 d-flex">
                        {
                            type ? (
                                <div className={"me-1 movie-badge badge-type-" + type.toLowerCase()}>
                                    {type === 'film-seri' ? 'SERIES' : 'MOVIE'}
                                </div>
                            ) : null
                        }
                        {
                            eps ? (
                                Number(eps) ? (
                                    <div className="me-1 movie-badge badge-eps">
                                        {eps} Eps
                                    </div>
                                ) : null
                            ) : null
                        }
                        {
                            quality ? (
                                <div className={"me-1 movie-badge badge-quality-" + quality.toLowerCase()}>
                                    {quality.toUpperCase()}
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard