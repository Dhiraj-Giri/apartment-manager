import React from 'react';
import { Link } from 'react-router-dom'
import axios from "axios"
import './Home.css'
import styled from "styled-components"


const Navbar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    background-color: Teal;
    h3{
        color: white;
    }
`

const Btn = styled.button`
    margin: 20px;
    margin-top: 22px;
    padding: 5px 20px;
    border-radius: 20px;
    border: none;
`

export const Home = () => {
    return (
        <div>
            <Navbar>
               <div>
                   <h3>Apartment Manager</h3>
               </div>
               
               <div><Link to="/login"><Btn>Login</Btn></Link> 
                    <Link to="/signup"><Btn>Sign Up</Btn></Link>
               </div>
            </Navbar>
               

           <div className='tablediv'>
                   <table>
                       <thead>
                           <th>id</th>
                           <th>Flat No</th>
                           <th>Type</th>
                           <th>Block</th>
                           <th>Residents</th>
                       </thead>
                   </table>
               </div>
        </div>
    );
};
