import "./App.css";
import LoginPage from "./components/Login/login";
import RegisterPage from "./components/Register/Register";
import StudentList from "./components/StudentList/StudentList";
import FeedBack from "./components/FeedBack/FeedBack";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/registerPage" element={<RegisterPage />} />
          <Route exact path="/studentList" element={<StudentList />} />
          <Route exact path="/feedBack" element={<FeedBack />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
