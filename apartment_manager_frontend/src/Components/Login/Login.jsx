import "./Login.css"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import styled from "styled-components"

const Box = styled.div`
height: 310px;
width: 350px;
margin: auto;
margin-top: 20px;
border-radius: 15px;
border: 1px solid black;
`

export const Login = () =>{

    const [user,setUser] = useState({
        email : "",
        password : ""
    })
    console.log(user)

    const handlechange = (event) =>{
        setUser({...user,[event.target.className]:event.target.value})

    }

    return(
        <>
        <Box>

        <h3>Login Here</h3>
        <div>
        
            <div>
                
            <div>
                <Link to={"/signup"} ><button>Signup</button></Link> 
                </div>
        <br /><br />
                <form onSubmit={(e)=>{
                }}>
                    <label>Email</label><input onChange={(e)=>{handlechange(e)}} type="text" className="email"  placeholder="Email Address"/> <br /> <br />
                    <label>Password</label><input onChange={(e)=>{handlechange(e)}}type="password" className="password" placeholder="Password" /> <br /> <br />
                    
                    <Link to={"/"}>
                    <input className="submitBtn" type="submit" />
                    </Link>
                    </form>
                     
            </div>

        </div>
        
        </Box>
        </>
    )

}