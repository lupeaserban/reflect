import Layout from '../components/Layout';
//mport Login from '../components/Login'
import GoogleLogin from 'react-google-login'
import React, { useState } from 'react'
import ProfileDetails from '../components/ProfileDetails'
import { isEmpty } from 'lodash'


const Account = () => {
  const [profileObj, setProfileObj] = useState({})

  const responseGoogle = (response) => {
    setProfileObj(response.profileObj)
  }

  const failGoogle = (response) => {
    console.log('Login failed!', response)
  }
  return (
    <Layout>
      <p>Account</p>
      <GoogleLogin
        clientId="591615586801-jt473emak2kluka567ch21om85n8ps0b.apps.googleusercontent.com"
        buttonText="Login"
        clientSecret="ZjW-HBvyBcVWbBq4VP72DG8B"
        onSuccess={responseGoogle}
        onFailure={failGoogle}
      >
      </GoogleLogin>
      {!isEmpty(profileObj) ? <ProfileDetails props={profileObj} /> : <p></p>}

    </Layout>
  );
}


export default Account;