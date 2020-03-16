import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class Login extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
        console.log(response)     
    }

    return (
      <div style={{textAlign: "center", margin: "5%"}}>
        <br />
        <GoogleLogin
        clientId="303026307778-lid67np22arl3s1d8p90f7k5k6udbhg9.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        clientSecret="msiX_lijjoCZbOSuStb1hJin"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <br />
      <br />
      
      <FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        icon="fa-facebook"
        callback={responseFacebook}
      />

      </div>
    );
  }
}

export default Login;