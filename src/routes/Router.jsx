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
import Genre from "../pages/Genre";
import Country from "../pages/Country";

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
                    </Route>
                    <Route path="/play" element={<Play />}>
                        <Route path=":id" element={<Play />} />
                    </Route>
                    <Route path="/genre" element={<Genre />}>
                        <Route path=":genre" element={<Genre />} />
                    </Route>
                    <Route path="/country" element={<Country />}>
                        <Route path=":country" element={<Country />} />
                    </Route>
                </Routes>
            </div>
            <FooterPage />
        </BrowserRouter>
    );
};

export default Router;