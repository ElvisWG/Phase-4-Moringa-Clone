import "./App.css";
import LoginPage from "./components/Login/login";
import RegisterPage from "./components/Register/Register";
import StudentList from "./components/StudentList/StudentList";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <Header />
      <RegisterPage />
      <StudentList />
    </div>
  );
}

export default App;
