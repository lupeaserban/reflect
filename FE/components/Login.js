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
        clientId="591615586801-jt473emak2kluka567ch21om85n8ps0b.apps.googleusercontent.com"
        buttonText="Login"
        clientSecret="ZjW-HBvyBcVWbBq4VP72DG8B"
        onSuccess={responseGoogle}
        onFailure={failGoogle}
        isSignedIn={true}
      >
      </GoogleLogin>
      <GoogleLogout 
        clientId="591615586801-jt473emak2kluka567ch21om85n8ps0b.apps.googleusercontent.com"
        clientSecret="ZjW-HBvyBcVWbBq4VP72DG8B"
        buttonText="Logout"
        />
      {!isEmpty(profileObj) ? <ProfileDetails props={profileObj} /> : <p>You are not logged in</p>}
    </div>
  );
}

export default Login