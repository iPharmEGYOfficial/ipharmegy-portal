import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [mode, setMode] = useState("portal");

  useEffect(() => {
    const currentMode = window.appMode || "portal";
    setMode(currentMode);

    document.title = "iPharmEGY - " + currentMode.toUpperCase();
    document.body.className = currentMode;
  }, []);

  return (
    <div className="app-container">
      <h1>iPharmEGY {mode.toUpperCase()}</h1>
      <p>Unified React Portal System</p>
    </div>
  );
}

export default App;
