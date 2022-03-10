import logo from "./soc-logo.svg";
import css from "./App.module.css"
import PokemonViewer from "../PokemonViewer";
import { FightButton } from "../Button";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";

function App() {
  return (
    <div className={css.App}>
      <header className={css.AppHeader}>
        <img src={logo} className={css.AppLogo} alt="logo" width="100px" />
        <p>Hackathon Friday</p>
        <LoginButton />
        <LogoutButton />
        <Profile />
        <div className={css.PokeDiv}>
        <PokemonViewer />
        <FightButton />
        <PokemonViewer />

        </div>
        
      </header>
    </div>
  );
}

export default App;
