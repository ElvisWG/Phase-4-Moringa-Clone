import React from 'react';
import Navbar from './Navbar';
import NavPage from './NavPage';
import Sidebar from './Sidebar';
import './App2.css'
 HEAD
function StudentMainPage({user}) {
    if (user) {
      return <h1>Welcome, {user.username}!</h1>;
    }
  }

// function StudentMainPage() {
//  bcbc8bec4fce633e652e844ba2912aaea3bae2a0
//   return (
//     <>
//       {/* navbar section */}
//       <div>
//         <Navbar/>

//       </div>
//       {/* sidebar section */}
//       <div className='sidebar-container'>
//         <div className='side-bar'>
//           <Sidebar/>
//         </div>
//         <div className='nav-page'>
//           <NavPage/>
//         </div>
//       </div>
//     </>
//   )
// }
export default StudentMainPage;
