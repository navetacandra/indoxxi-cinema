import React from 'react'
import { useParams } from 'react-router-dom';
import GenreSelector from '../common/components/GenreSelector';
import GenreSearch from '../modules/GenreSearch';

function Genre() {
    let genre_list = ["Action", "Adventure", "Animation", "Biography", "Chinese", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film-noir", "Foreign", "History", "Horror", "Musical", "Mystery", "News", "Romance", "Sci-fi", "Short", "Sport", "Thriller", "War", "Western"];
    let { genre: current } = useParams();
    return (
        <div className="container mt-5">
            {
                !current ? (
                    <div className="row justify-content-center mt-5">
                        {
                            genre_list.map((val, key) => (
                                <GenreSelector genre={val} key={key} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="row justify-content-start">
                        <GenreSearch genre={current} />
                    </div>
                )
            }
        </div>
    )
}

export default Genre