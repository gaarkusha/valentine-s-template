import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Text from "./Text";

const Navigation = () => {
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/invite" element={<Text/>}/>
        </Routes>
    )
}

export default Navigation