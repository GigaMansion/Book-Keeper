import React, {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPanel.module.css';
import { GoogleLogin } from 'react-google-login';

import { Login } from '../api/Auth';


const LoginPanel = (props) => {
    const [email,setEmail] = useState("")
    const [imageUrl,setImageUrl] = useState("")
    const history = props.history;
    const responseGoogle = async (response) => {
        console.log(response);
        const data = {
            id: response.profileObj.googleId,
            imageUrl: response.profileObj.imageUrl,
            email: response.profileObj.email,
            name: response.profileObj.name
        }
        
        setImageUrl(data.imageUrl)
        
        const res = await Login(data);
        console.log(res);
        console.log(sessionStorage.getItem('gm-token'));
        if (res === 200){
            history.push("/adminpage/newReimburse")
            console.log("successfully logged in.");
        }
        
    }

    const failresponseGoogle = (response) => {
        console.log("fail");
        console.log(response);
    }

    useEffect(()=>{
        const token = sessionStorage.getItem("gm-token");
        if(token && token.length !== 0){ // testing only should check auth
            history.push("/adminpage/newReimburse")
        }
    })


    return(
        <div>
            <script src="https://apis.google.com/js/platform.js" async defer></script>
        
            <div className="Login">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"></link>

                <GoogleLogin
                    clientId="154834213059-4v2mfjapm04hciic1t190kokpj070c6f.apps.googleusercontent.com"
                    render={renderProps => (
                    <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="light" size="lg">
                        Login with <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path fill="none" d="M0 0h18v18H0z"></path></g></svg>
                    </Button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={failresponseGoogle}
                    cookiePolicy={'none'}
                    // uxMode="redirect"
                    // redirectUri="http://localhost:3000/adminpage"
                    // prompt={'none'}
                />

            
            </div>
            <Image src={imageUrl} roundedCircle />
        </div>
    )
}

export default withRouter(LoginPanel)