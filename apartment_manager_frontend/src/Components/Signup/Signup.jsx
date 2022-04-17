import React from 'react';
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

export const Signup = () => {
    return (
        <div>
            <Box>
            <h3>Sign Up</h3>
            <div>
                <form>
                        <label>UserName</label><input type="text" className='name'/>
                        <br /><br />
                        <label>Email</label><input type="text" className='email'/>
                        <br /><br />
                        <label>Password</label><input type="text" className='password'/>
                        <br /><br />
                        <input type="submit" className='submit'/>
                </form>
                <br />
                <Link to={"/login"} ><button>Go to Login</button></Link> 
            </div>
            </Box>
        </div>
    );
};
