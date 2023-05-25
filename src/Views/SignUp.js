import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SignUp.css'
function SignUp(props){
  const [email,setEmail]=useState('')
  const [fullName,setFullName]=useState('')
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/login')
  }
  const handleSubmit = async(event) => {
    event.preventDefault();

    try{
      const response = await axios.post('http://localhost:4000/app/signup',{
        fullname:fullName,
        username:username,
        email:email,
        password: password
      });
      console.log(response.data)
      navigate('/login')
    }catch (e) {
      if (e.response && e.response.status === 500){
        alert('Error user or email already exists')
      }
      console.log(e)
    }

  }

  return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" ,background:"#F9F9F9"}}>
    <div className="parent container border w-25 rounded hover-shadow shadow p-3 mb-5 rounded" style={{background:"#D9D2C2"}}>
      <div className="form-div text-center">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4 mt-4">
            <input
              className="rounded-2"
              type = "text"
              placeholder="Fullname"
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              className="rounded-2"
              type = "text"
              placeholder="Username"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="form-outline mb-4">
            <input
              className="rounded-2"
              type = "text"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              className="rounded-2"
              type = "text"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit"
                    className="btn  mb-4 text-white"
                    style={{background:"#333333"}} >
              Sign Up
            </button>
            <button type="button"
                    className="ms-4 btn mb-4 text-white"
                    onClick={handleClick}
                    style={{background:"#333333"}}>
              Sign In
            </button>

          </div>

        </form>

      </div>

    </div>
    </div>

  );
}

export default SignUp;