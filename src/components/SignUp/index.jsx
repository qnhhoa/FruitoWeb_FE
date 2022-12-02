
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUpApi } from '../../api/signupApi';
import './styles.scss';
import swal from 'sweetalert'
function SignUp() {
  const [dataFrom,setDataForm]=useState({
    Email:'',
    Password:'',
    FullName:'',
    Phone:'',
    Address:'',
    Username:'',
  });

const handleOnchange=(e)=>{ setDataForm({...dataFrom,[e.target.name]:e.target.value})}
const handleSubmit = async (e) => {
  e.preventDefault();
  const res =  await signUpApi(dataFrom);
  if(!res)
    return swal("Here's a message!", "Some thing wrong")
  return swal("Here's a message!", "Register success")
}
    return (
        <div className="Signup" >
            

        <div className="login-form">
                <div className="login-left">
                  <div className="content">
                    <h3>Logo</h3>
                    <p className="welcome">Welcome to Envy</p>
                    <p className="text-introduce">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac nisl tristique, lacinia ipsum tempor, gravida nibh. Mauris odio nulla, efficitur tempor velit sed, aliquam dapibus libero.</p>
                    <div className="icon">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    </div>
                  </div>
                </div>    

                <div className="login-right">
                  <div className="content">
                    <p className="hellothere">Sign up</p>
                    
                    
                    <form onSubmit={handleSubmit} className="login_form" id="form-1">
                      <div className="form-group">
                        <input id="username" name="Username" value={dataFrom.Username} onChange={e=>handleOnchange(e)} type="text" placeholder="Username" className="form-control" required/>
                     
                      </div>
                    
                      <div className="form-group">
                        <input id="password" name="Password" value={dataFrom.Password} onChange={e=>handleOnchange(e)} type="password" placeholder="Password" className="form-control" required/>
                       
                      </div>

                      <div className="form-group">
                        <input id="FullName" name="FullName" type="text" value={dataFrom.FullName} onChange={e=>handleOnchange(e)} placeholder="Full name" className="form-control" required/>
                        <span className="form-message"></span>
                      </div>

                      <div className="form-group">
                        <input id="phone" name="Phone"  value={dataFrom.Phone} onChange={e=>handleOnchange(e)} type="text" placeholder="Phone number" className="form-control" required/>
                        <span className="form-message"></span>
                      </div>

                      <div className="form-group">
                        <input id="address" name="Address"  value={dataFrom.Address} onChange={e=>handleOnchange(e)} type="text" placeholder="Address" className="form-control" required/>
                        <span className="form-message"></span>
                      </div>

                      <div className="form-group">
                        <input id="email" name="Email"  value={dataFrom.Email} onChange={e=>handleOnchange(e)} type="email" placeholder="Email" className="form-control" required/>
                        <span className="form-message"></span>
                      </div>
                      

                      <div className="wthree-text">
                        <label className="anim">
                            <input type="checkbox" className="checkbox" required=""/>
                            <span>I Agree to the terms and conditions</span>
                        </label>
                        <div className="clear"></div>
                    </div>

                      <button className="form-submit btn" type='submit'>Create account</button>
                      
                      <p className="loginnow">You have an Account? <Link className="login-now" to="/Login">Login now!</Link></p>
                      
                
                    </form>
                  </div>
                </div>
              </div>
                </div>
    )
}

export default SignUp
