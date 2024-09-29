import React from "react";
import { useLocation } from "react-router-dom";

import './Home.css';

const Home = () => {
    const location = useLocation();
    const {message} = location.state || {}; // 전달된 메세지 받기

    return (
        <div className="success-container">
            <h1>Login Successful!</h1>
            <p>{message}</p>
        </div>
    )

}

export default Home;