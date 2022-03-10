import css from "./App.module.css";
import articles from "../../libs/articles";
// import Post from "../Post/index.js";
import Posts from "../Posts/index.js";
import DatePickerA from "../DatePicker/index.js";
import LoginButton from "../loginButton/index.js";
import LogoutButton from "../logoutButton/index.js";

function App() {
  return (
    <div className={css.App}>
      <h1>WikiPigeon</h1>
      <LoginButton />
      <LogoutButton />

      <Posts articles={articles} />
      <DatePickerA />
    </div>
  );
}

export default App;
