import React from 'react';
import Navbar from './StudentNavbar';
import NavPage from './StudentNavPage';
import Sidebar from './StudentSidebar';
import './App2.css'
 
function StudentMainPage({user}) {
    if (user) {
      return <h1>Welcome, {user.username}!</h1>;
    }
  }

export default StudentMainPage;
