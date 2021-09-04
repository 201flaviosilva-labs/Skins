import Avatar from "./components/Avatar/Avatar";
import "./style/App.css";


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Skins</h1>
      </header>

      <main>
        <Avatar />
      </main>

      <footer>
        <p><a href="https://kenney.nl/assets/modular-characters">Kenney Assets</a></p>
      </footer>
    </div>
  );
}
