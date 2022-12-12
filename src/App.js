import React from "react";
import "./App.css";
import LoginPage from "./components/Authorization/login";
import MainPage from "./TechnicalMentors/MainPage";


import SignUpPage from "./components/Authorization/SignUp";
import StudentList from "./components/Pages/StudentList";
import NavBar from "./components/Bars/NavBar";
import Home from "./components/Home/Home";
import CreateAssessment from "./components/Pages/CreateAssement";
import InvitationForm from "./components/Pages/InvitationForm";
import { Route, Routes } from "react-router-dom";
import StudentMainPage from "./Student/StudentMainPage";
import Studentinvitationform from "./components/Pages/Studentinvitationform";

function App() {

  return (
    <div className="App">
       

      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<SignUpPage />} />
        <Route exact path="/dashboard" element={<MainPage />} />
        <Route exact path="/student" element={<StudentMainPage />} />
        <Route exact path="/studentList" element={<StudentList />} />
        <Route exact path="/createAssessment" element={<CreateAssessment />} />
        <Route exact path="/invitation" element={<InvitationForm />} />
        <Route exact path="/studentinvitationform" element={<Studentinvitationform />} />
      </Routes>
    </div>
  );
}

export default App;
