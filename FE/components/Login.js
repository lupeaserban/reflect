import { GoogleLogin, GoogleLogout } from 'react-google-login'
import React, { useState } from 'react'
import ProfileDetails from './ProfileDetails'
import { isEmpty } from 'lodash'


const Login = () => {
  const [profileObj, setProfileObj] = useState({})

  const responseGoogle = (response) => {
    setProfileObj(response.profileObj)
  }

  const failGoogle = (response) => {
    console.log('Login failed!', response)
  }

  return (
    <div>
       <GoogleLogin
        clientId=""
        buttonText="Login"
        clientSecret=""
        onSuccess={responseGoogle}
        onFailure={failGoogle}
        isSignedIn={true}
      >
      </GoogleLogin>
      <GoogleLogout 
        clientId=""
        clientSecret=""
        buttonText="Logout"
        />
      {!isEmpty(profileObj) ? <ProfileDetails props={profileObj} /> : <p>You are not logged in</p>}
    </div>
  );
}

export default Login
