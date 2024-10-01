import React from "react";
import { useLocation } from "react-router-dom";

import './Home.css';

const Home = () => {
    const location = useLocation();

    const params = new URLSearchParams(location.search)
    const message = params.get('message');

    const logout = () => {
        window.location.href = "http://localhost:3000";
    };

    return (
        <div className="success-container">
            <div>
                <h1>{message} 님 로그인 성공!</h1>
            </div>
            <div>
                <button onClick={logout}>로그아웃</button>
            </div>
        </div>
    )

}

export default Home;