import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Play from "../pages/Play";
import Search from "../pages/Search";

import SearchInput from '../common/components/SearchInput';
import Navbar from "../common/components/Navbar";
import FooterPage from "../common/components/FooterPage";

function Router() {
    return (
        <BrowserRouter>
            <>
                <Navbar />
                <SearchInput />
            </>
            <div id="app" className="pb-3 mb-3" style={{ minHeight: '70vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />}>
                        <Route path=":keyword" element={<Search />} />
                        <Route path=":keyword/page" element={<Search />} />
                        <Route path=":keyword/page/:page" element={<Search />} />
                    </Route>
                    <Route path="/play" element={<Play />}>
                        <Route path=":type" element={<Play />} />
                        <Route path=":type/:id" element={<Play />} />
                    </Route>
                </Routes>
            </div>
            <FooterPage />
        </BrowserRouter>
    );
};

export default Router;