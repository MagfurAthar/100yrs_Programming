import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        <b> This is my first Bootstrap App</b>
      </p>
      <span class="badge text-bg-primary">Primary</span>
      <span class="badge text-bg-secondary">Secondary</span>
      <span class="badge text-bg-success">Success</span>
      <span class="badge text-bg-danger">Danger</span>
      <span class="badge text-bg-warning">Warning</span>
      <span class="badge text-bg-info">Info</span>
      <span class="badge text-bg-light">Light</span>
      <span class="badge text-bg-dark">Dark</span>
    </div>
  );
}

export default App;
