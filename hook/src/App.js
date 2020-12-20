import { useState } from "react";
import "./App.css";
import ClockFeature from "./features/ClockFeature";

function App() {
  const [clock, setClock] = useState(true);
  return (
    <div className="App">
      {clock && <ClockFeature />}
      <button onClick={() => setClock(false)}>Click me</button>
    </div>
  );
}

export default App;
