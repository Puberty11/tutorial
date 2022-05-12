import logo from "./logo.svg";
import "./Practice.css";

function Practice() {
  return (
    <div className="AppPractice">
      <header className="App-headerPractice">
        <img src={logo} className="App-logoPractice" alt="8===D~~" />
        <p>
          Edit <code>src/Practice.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xiao En
        </a>
      </header>
    </div>
  );
}

export default Practice;
