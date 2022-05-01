import React, { useEffect, useState } from 'react'
import ServerSelector from '../common/components/partials/ServerSelector';

function EmbedPlayer({ result }) {
    const [server, setServer] = useState(0);
    const [link, setLink] = useState([]);
    const [caption, setCaption] = useState([]);

    useEffect(() => {
        if (result.source) {
            let src = result.source;
            !!src.links.length ? setLink(src.links) : setLink([]);
            !!src.caption.length ? setCaption(src.caption) : setCaption([]);
        }
    }, []);

    return (
        <div className="container mt-3 mb-3">
            {
                link && !!link.length && Array.isArray(link) ? (
                    <>
                        <div className="d-flex justify-content-center mb-5">
                            <iframe
                                title={result.title}
                                src={link[server]}
                                frameborder="0"
                                scrolling="yes"
                                allowfullscreen=""
                                style={{ height: '80vh', width: '100vw' }}>
                            </iframe>
                        </div>
                        <ServerSelector links={link} setServer={setServer} />
                    </>
                ) : (
                    <div className="bg-dark" style={{ padding: '7em 0' }}>
                        <div className="d-flex justify-content-center text-white">
                            <h4>Streams not found!</h4>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default EmbedPlayer