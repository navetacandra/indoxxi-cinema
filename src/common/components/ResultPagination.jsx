import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

function ResultPagination({ result }) {
    let pages = result ? result.length ? Math.ceil(result.length / 20) : 0 : 0;
    pages = Array(pages).fill(1).map((_, i) => i + 1)

    let { pathname } = useLocation();
    let path = pathname.split('/pages')[0];

    let { page: current_page } = useParams();
    current_page = current_page ? current_page : 1;

    return (
        <div className="col">
            {
                pages.map((val, key) => (
                    <Link to={path + '/page/' + val} key={key}>
                        <span className="fs-5 text">{val}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default ResultPagination