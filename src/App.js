import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Tablazat from "./components/Tablazat";
import Navigacio from "./components/Navigacio";
import Urlap from "./components/Urlap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Számalk-Szalézi technikum és Szakgimnázium 2020-2022 évfolyam
        szoftverfejlesztőinek szakdolgozatai
      </header>
      <article>
        <Navigacio />
        <Tablazat />
        <Urlap/>
      </article>
      <footer>@massanyicsilla</footer>
    </div>
  );
}

export default App;
