import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./components/atv01/Atv01";
import Atv02 from "./components/atv02/Atv02";

function MinharRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atv01" element={<Atv01 />} />
                <Route path="/atv02" element={<Atv02 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MinharRotas;