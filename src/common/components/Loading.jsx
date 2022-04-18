import React from 'react'

function Loading() {
    return (
        <div className="spinner-border text-secondary mt-3" role="status" style={{ width: '4em', height: '4em' }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Loading;