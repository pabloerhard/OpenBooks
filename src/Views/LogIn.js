import React, { useState} from "react";
import axios from 'axios'
import {useSignIn} from "react-auth-kit";
import '../css/Login.css'
import {useNavigate} from "react-router-dom";
function LogIn(){
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const signIn = useSignIn();
  const navigate = useNavigate();
  const handleLogIn = async() => {
      try{
        const response = await axios.post('http://localhost:4000/app/user',{
          username:username,
          password:password
        });
        console.log(response.data)
        signIn({
          token:response.data.token,
          expiresIn:3600,
          tokenType: "Bearer",
          authState: {username:username}
        })
        navigate('/findbooks')
      }catch (e) {
        if (e.response && e.response.status === 404){
          alert("The user does not exist or the password is incorrect")
        }
        console.log(e)
      }
  }

  return(
    <div className="container-principal">
      <div className="container hover-shadow shadow p-3 mb-5 rounded">
        <h1>Sign In</h1>

        <div className="form">
          <input type="text"  className="form-input" placeholder="Username"
                 onChange={(event) => setUserName(event.target.value)}/>
        </div>

        <div className="form">
          <input type="text"  className="form-input" placeholder="Password"
                 onChange={(event) => setPassword(event.target.value)}/>
        </div>

        <div >
          <button onClick={handleLogIn} type="button" className="btn btn-primary btn-block mb-4" >Sign In</button>
        </div>

      </div>
    </div>


  );
}
export default LogIn