import TopNavBar from "../top-nav-bar";
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import "./homeStyles.css"

function Home() {
    const [currentLink, setCurrentLink] = useState('/')
    let isUserLoggedIn = false;
    try{
        isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
        if(isUserLoggedIn && isUserLoggedIn.id){
            // do nothing, continue lang
        }else{
            localStorage.clear();
            window.location.href = 'http://localhost:3000/login'
        }
    }catch(error){
        localStorage.clear();
        window.location.href = 'http://localhost:3000/login'
    }

 
    return (
        <>
                <div class="container-fluid px-0 py-0 vh-100 bg-dark">
                <TopNavBar  setCurrentLink={setCurrentLink} test={1}/>
                    <div class="row">
                       
                        <main class="container-fluid pt-2 mt-5">
                          
                           
                            <Outlet/>
                        </main>
                       
                    </div>
                </div>
            </>
      
    );
}

export default Home;