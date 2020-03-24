import GoogleLogin from 'react-google-login'
import Router from 'next/router'

const Login = () => {
  let profileObj = {}

  const responseGoogle = (response) => {
    profileObj = response.profileObj
    console.log(profileObj)
  }

  const failGoogle = (response) => {
    console.log('Login failed!', response)
  }

  // const renderUserAccount = () => {
  //   const { name, email, imageUrl } = userData
  //   console.log(name)
  //   return (
  //     <div ref={ref}>
  //       <p>{name}</p>
  //       <p>{email}</p>
  //       <img src={imageUrl} alt=""></img>
  //     </div>
  //   )
  // }

  return (
    <span onClick={() => Router.push('/account')}>
      <GoogleLogin
        clientId="591615586801-jt473emak2kluka567ch21om85n8ps0b.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="Login"
        clientSecret="ZjW-HBvyBcVWbBq4VP72DG8B"
        onSuccess={responseGoogle}
        onFailure={failGoogle}
      >
      </GoogleLogin>
    </span>
  );
}

export default Login