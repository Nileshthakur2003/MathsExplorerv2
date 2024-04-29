import React from 'react'
// import ReactDOM from 'react-dom/client'
import { Outlet,Link } from "react-router-dom";

const About = () =>{

    return(
        <>
        <h1>
            Welcome to MathsExplorerv1.0
        </h1>
        <p className="text-xl m-10">
            This Web Application is dedicated for learning enggineering mathematics the interesting way.
        </p>
        <button className='m-10'><Link to="/">Link to Dashboard</Link></button>
      
        
        </>
    );
}

export default About;