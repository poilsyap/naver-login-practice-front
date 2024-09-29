import React, {useEffect} from "react";
import {naverClienId, naverClientSecret, naverRedirectURL} from "../resouces/Oauth"


const Naver = () => {

    const naver_client_id = naverClienId;
    const redirect_url = naverRedirectURL;
    const state = false;
    const naver_auth_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;


    const NaverLogin = () => {
        window.location.href = naver_auth_url;
    };

    return <button onClick={NaverLogin}>네이버 로그인</button>
};

export default Naver;
