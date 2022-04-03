// import React from "react";
import React from "react";
import axios from "axios";
// import Login from './components/Login';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";
    


    
function Login() {
    const usernameRef =React.useRef();
    const passwordRef =React.useRef();
    var check=-1;
    var clickSubmit = i => {
        
        
        axios.post("http://localhost:5000/login",{
        "email": usernameRef.current.value,
        "password":passwordRef.current.value,
      })
      .then((response)=> {
              check  =response.data;
              if(check===1){
                window.alert("Welcome User");
                history.push('/login');
              }
              else if(check===2){
                  window.alert("Welcome Admin");
                  history.push('/login');
              }
              else
            {
                window.alert("Bad Credentials");
            history.push('/login');}
            //   console.log("hai from then"+check);
      })
        console.log("hai");
        if (!i.target.username.value) {
            alert("Email is Required")
            history.push('/login');
        }
        else if (!i.target.username.value) {
            alert("Valid email is required")
            history.push('/login');
        }
        else if (!i.target.pass.value) {
            alert("Password is required")
            history.push('/login');
        }
        // else
        // {
            
                // console.log(check);
        
                
        // }
        i.preventDefault();
        // else if(i.target.user){
        //     alert("Email & Password is required");
        // }
    };
    // function changeLogin()
    // {
        console.log("called");
            const history = useHistory();
            const changeLogin = () => history.push('/register');
        // setInLogin(0);
        // };

    {
        // console.log(props);
        
        return (

            <div classNameName="App">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">

                            <form className="login100-form validate-form" onSubmit={clickSubmit}>
                                <span className="login100-form-title p-b-34">
                                    Account Login
                                </span>

                                <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
                                    <input id="first-name" ref={usernameRef} className="input100" type="text" name="username" placeholder="User name" />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password" >
                                    <input className="input100" ref={passwordRef} type="password" name="pass" placeholder="Password" />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Sign in
                                    </button>
                                </div>

                                <div className="w- text-center p-t-27 p-b-239">
                                    <span className="txt1">

                                        {/* Forgot &nbsp; */}
                                    </span>

                                    {/* <a href="#" className="txt2">
                                        User name / password? */}
                                    {/* </a> */}
                                </div>
                                {/* </center> */}
                                <div className="w-full text-center">
                                    <a className="txt3" onClick={changeLogin}>
                                        Sign Up
                                    </a>
                                </div>
                            </form>
                            <div className="login100-more" ></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Login;