import "./styles.css";
import React from "react";
import {LoginAPI} from '../Utils/fetch';
import { useState } from "react";


function Login ()
{
 let isUserLoggedIn=false;
 try{
    isUserLoggedIn=JSON.parse(localStorage.getItem("user"))
    if(isUserLoggedIn && isUserLoggedIn.id)
    {
        window.location.href="http://localhost:3000/"
    }
 }
 catch(error)
 {
console.log("Login Error", error)
 }
 const login = ()=>{
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    console.log('username: ', username)
    console.log('password: ', password)
    LoginAPI(username, password)
    .then((result)=>{
        return result.json()
    })
    .then((result)=>{
        console.log('result: ', result)
        console.log('localStorage: ', localStorage)
        if(result.success){
            //go to dashboard / home
            localStorage.setItem('user', JSON.stringify(result.userData))
            window.location.href = 'http://localhost:3000/'
        }else{
       
        }
    })
    .catch(error=>{
        console.log('error: ', error)
    
    })
 }
 return(
    // !!isUserLoggedIn ?
    <>
   <div class="first-div vh-100 bg-dark">

  <div class="container py-5 h-100 primary-div">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong radius" >
          <div class="card-body p-5 text-center">

          <h5 class="mb-4">NYC Employee Management System</h5>
            <h5 class="mb-2">Login</h5>

            <div class="form-outline mb-2">
              <input  id="username"  type="username" placeholder="Username" class="form-control form-control-sm border-secondary" />
              <label class="form-label" >Username</label>
            </div>

            <div class="form-outline mb-1">
              <input id="password" type="password" placeholder="Password"  class="form-control form-control-sm border-secondary" />
              <label class="form-label" for="typePasswordX-2">Password</label>
            </div>

            <div class="form-outline d-grid gap-2">
            <button class="btn btn-primary btn-sm btn-block" onClick={login}>Login</button>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
    // :<>
    // </>
 );
 


}

export default Login;