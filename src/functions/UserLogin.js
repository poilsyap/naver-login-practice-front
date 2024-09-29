import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import {naverClienId, naverClientSecret, naverRedirectURL} from "../resouces/Oauth"

import './UserLogin.css';


const UserLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // 페이지 리프레시 및 리다이랙트와 같은 기본동작을 막고 axios로 api요청을 할 수 있게 해줌
        try{
            const response = await axios.post('http://localhost:8080/api/login',
                {email, password}
            );
            if(response.status === 200){
                navigate('/Home', {state: {messsage: response.data}});
            }
        }catch(error){
            setError('Invalid email or password');
        }
    };

    const naver_client_id = "CW0BQSe6XFSmQf39fG3V";
    const redirect_url = "http://localhost:8080/api/member/login/naver";
    const state = encodeURIComponent("poil")
    const naver_auth_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naver_client_id}&state=${state}&redirect_uri=${redirect_url}`;

    const NaverLogin = () => {
        window.location.href = naver_auth_url;
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <br />
            <button className="naverLoginBtn" onClick={NaverLogin}>네이버 로그인</button>
        </div>
    )
}

export default UserLogin;