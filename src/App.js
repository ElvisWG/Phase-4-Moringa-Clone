
import './App.css';
import LoginPage from "./components/Login/login";
import RegisterPage from './components/Register/Register';
import { ReviewCard } from './components/Reviews/ReviewCard';
import { ReviewForm } from './components/Reviews/ReviewForm';

function App() {
  return (
    <div className="App">
      {/* <LoginPage />
      <RegisterPage /> */}
      <ReviewCard />
      <ReviewForm />
    </div>
  );
}

export default App;
