// src/App.jsx
import "./App.css";
import menu from "./assets/menu-top-xs.png";
import logo from "./assets/ironhack-logo-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <section className="topSection">
        <img src={menu} className="menu" />
        <img src={logo} className="logo" />
        <section className="titleSection">
          <h1>
            Say hello to
            <br /> ReactJS
          </h1>
          <p>
            You will learn how to use
            <br /> the most popular frontend library,
            <br /> and becom a super Ninja developer.
          </p>
        </section>
      </section>

      <section className="bottomSection">
        <article>
          <img src={icon1} />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </article>

        <article>
          <img src={icon2} />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </article>

        <article>
          <img src={icon3} />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components's.</p>
        </article>

        <article>
          <img src={icon4} />
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers.</p>
        </article>
      </section>
    </div>
  );
}

export default App;
