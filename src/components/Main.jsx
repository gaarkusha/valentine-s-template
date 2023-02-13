import React from "react";
import { Link } from "react-router-dom";
import "../components/Main.css"

const Main = () => {
    return(
        <div>
            <div className="logo-wrapper">
                <div className="logo-text">14</div>
                <div className="logo-text">FEB</div>
            </div>
            <div className="main-wrapper">
                <div className="text-wrapper">
                    <div className="title">Valentine's</div>
                    <div className="span-title">DAY</div>
                    <button className="btn-wrapper">
                        <Link to='/invite' className="btn">READ</Link>
                    </button>
                </div>        
                <div className="bg"></div>
            </div>
        </div>
    )
}

export default Main