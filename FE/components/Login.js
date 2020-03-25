import GoogleLogin from 'react-google-login'
import { useRouter } from 'next/router'
//import React, { useState } from 'react'


const Login = ({href}) => {
  const router = useRouter()

  let profileObj = {}

  const responseGoogle = (response) => {
    profileObj = response.profileObj
    router.push(href)
  }

  const failGoogle = (response) => {
    console.log('Login failed!', response)
  }

  return (
      <GoogleLogin
        clientId="591615586801-jt473emak2kluka567ch21om85n8ps0b.apps.googleusercontent.com"
        buttonText="Login"
        clientSecret="ZjW-HBvyBcVWbBq4VP72DG8B"
        onSuccess={responseGoogle}
        onFailure={failGoogle}
      >
      </GoogleLogin>
  );
}

export default Login