import React from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Routing } from "./components/Routing.jsx";
import { Store } from "./context/Store.jsx";

function App() {
  return (
    <Store>
      <Navbar />
      <Routing />
    </Store>
  );
}

export default App;
