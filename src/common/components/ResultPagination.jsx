import React from 'react';
import '../style/PageSelector.css';

function PageSelector({ text, index, setPage, isActive }) {
    return (
        <div className={isActive ? `page-selector me-2 active` : `page-selector me-2`} onClick={() => setPage(index)}>
            <span className="fs-5 text me-1">
                {text}
            </span>
        </div>
    )
}

function ResultPagination({ result, setPage, page, className = '' }) {
    let all_pages = result ? result.length ? Math.ceil(result.length / 20) : 0 : 0;
    all_pages = Array(all_pages).fill(1).map((_, i) => i + 1)
    let min = page === 1 
        ? 0 
        : (page - 3) <= 0 
            ? 0 
            : page - 3;
    let max = page <= 2 
        ? 5 
        : page + 2;
    let pages = all_pages.slice(min, max);

    return (
        <div className={"row justify-content-center " + className}>
            {
                (page - 1) < 1 ? (
                    null
                ) : (
                    <PageSelector
                        text={'<'}
                        setPage={setPage}
                        index={page - 1}
                    />
                )
            }
            {
                pages.map((val, key) => (
                    <PageSelector
                        text={val}
                        setPage={setPage}
                        index={val}
                        isActive={page === val}
                        key={key}
                    />
                ))
            }
            {
                (page + 1) > all_pages.length ? (
                    null
                ) : (
                    <PageSelector
                        text={'>'}
                        setPage={setPage}
                        index={page + 1}
                    />
                )
            }
        </div>
    )
}

export default ResultPagination