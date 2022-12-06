import "./App.css";
import LoginPage from "./components/Login/login";
import RegisterPage from "./components/Register/Register";
import StudentList from "./components/StudentList/StudentList";
import FeedBack from "./components/FeedBack/FeedBack";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <RegisterPage />
      <StudentList />
      <FeedBack />
    </div>
  );
}

export default App;
