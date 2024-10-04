import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import './Home.css';

const Home = () => {
    const location = useLocation();

    const params = new URLSearchParams(location.search)
    const message = params.get('message');
    const navigate = useNavigate();

    const logout = async (e) => {
        e.preventDefault(); // 페이지 리프레시 및 리다이랙트와 같은 기본동작을 막고 axios로 api요청을 할 수 있게 해줌

        try{
            const response = await axios.post('http://localhost:8080/api/member/logout/naver',{
                email: message
            });
            if(response.status === 200){
                navigate('/');
            }
        }catch(error){
            console.error(error)
        }

    };

    return (
        <div className="success-container">
            <div>
                <h1>{message} 님 로그인 성공!</h1>
            </div>
            <div>
                <button className="logout" onClick={logout}>로그아웃</button>
            </div>
        </div>
    )

}

export default Home;