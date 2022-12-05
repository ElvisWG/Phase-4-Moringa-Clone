import "./App.css";
import LoginPage from "./components/Login/login";
import RegisterPage from "./components/Register/Register";
import StudentList from "./components/StudentList/StudentList";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <RegisterPage />
      <StudentList />
    </div>
  );
}

export default App;
