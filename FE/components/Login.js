import GoogleLogin from 'react-google-login'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ProfileDetails from './ProfileDetails'
import { isEmpty } from 'lodash'


const Login = ({ href }) => {
  const router = useRouter()
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
      >
      </GoogleLogin>
      {!isEmpty(profileObj) ? <ProfileDetails props={profileObj} /> : <p></p>}
    </div>
  );
}

export default Login