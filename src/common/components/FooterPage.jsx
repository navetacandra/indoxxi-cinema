import React from 'react'

function FooterPage() {
    return (
        <footer className="mt-5 pb-3 footer" style={{ backgroundColor: '#F2F2F2', zIndex: '-3' }}>
            <div className="container">
                <div className="justify-content-center">
                    <div className="col pt-3 mb-3">
                        <h4 className="text-center text-dark">INDOXXI CINEMA</h4>
                    </div>
                    <div className="col pt-3 mb-3">
                        <span className="text-center text-dark">
                            <strong>Indoxxi Cinema</strong> merupakan situs film yang menyediakan streaming film untuk seluruh masyarakat Indonesia. Seiring berkembangnya teknologi, semakin banyak aktivitas yang dilakukan secara digital, lebih mudah dan praktis, termasuk kegiatan menonton film yang kini semakin marak dilakukan secara digital, baik melalui komputer, laptop, hingga smartphone yang bisa diakses kapan saja dan di mana saja.
                            <strong> Indoxxi Cinema</strong> hadir sebagai website nonton movie online dengan film-film terbaru versi HD dan Bluray. Hal ini memungkinkan setiap orang untuk nonton langsung maupun streaming dengan mudah secara online.
                        </span>
                    </div>
                    <div className="col text-center">
                        <span>{new Date().getFullYear()} &copy; Indoxxi Cinema</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage