import "./App.css";
import LoginButton from "./components/loginButton.js";
import LogoutButton from "./components/logoutButton.js";
import Profile from "./components/profile.js";

function App() {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default App;
