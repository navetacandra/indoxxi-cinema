import React from 'react'
import '../../style/ServerSelector.css';

function ServerSelector({ links, setServer }) {
    return (
        links && !!links.length ? (
            <div className="container mb-5">
                <div className="d-flex justify-content-start">
                    <h4 className='ms-2'>Server</h4>
                </div>
                <hr className="mb-3" style={{ marginTop: '-.05em' }} />
                {
                    links.map((val, key) => (
                        <div className="d-flex justify-content-center mb-2" onClick={() => setServer(key)}>
                            <div className="col-8 server-selector" key={key}>
                                <span className="fs-6 text text-center">
                                    Server {key + 1}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        ) : null
    )
}

export default ServerSelector