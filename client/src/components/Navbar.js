import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Actions from '../constants/actions';

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  // const logout = () => {
  //   dispatch({ type: Actions.LOGOUT });

  //   history.push('/');

  //   setUser(null);
  // };
  useEffect(()=>{
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  })
  console.log(user);
    return (
        <div className="navbar">
          <button className="spl-btn"><a href="/">Home</a></button> 
          {user?.result ? (
            <div>
              <button className='spl-btn'>Welcome, {user?.result.name}</button>
              <button className="spl-btn"><a href="/">Logout</a></button>
            </div>
          ): (<button className="spl-btn"><a href="/login">Login</a></button>)}
        </div>
    )
}
