import React, { useState } from 'react';
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import '../styles/components/login.css';
import toastr from 'toastr';
import "toastr/build/toastr.css";

const Login = () => {
   const history = useHistory();
	const [login, setLogin] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const superAdmin = {login,password};

	axios.post(`http://localhost:5000/login`, superAdmin)
		.then(res => {
			console.log(res)
			if(!res.data.message){ 
			 let token= res.data.token;
			 localStorage.setItem("token", token);
			 history.push('superadmin');
			 toastr.info('SuperAdmin is authenticated SuccessFully', `Welcome ${superAdmin.login}`, {
				positionClass: "toast-top-left",
			})

			}else{
				toastr.warning(res.error, 'Login Or password invalid !!!! Please Check form !', {
                    positionClass: "toast-top-left",
                })
			}
		 
		})
	}
  return(
<div className="wrapper">
	<div className="container">
		<h1>Welcome</h1>
		
		<form className="form"  onSubmit={handleSubmit}>

			<input type="text" required 
			  onChange={e => setLogin(e.target.value)}
			   placeholder="login"/>

			<input type="password" required 
			value={password} 
			onChange={e => setPassword(e.target.value)}
			 placeholder="Password"/>


			<button type="submit" id="login-button">Login</button>
			<br></br><br></br>
			<Link to="/register">You don't have an acount ? Register now</Link>
		</form>
	</div>
	
	<ul className="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>
  )
}
export default Login;
