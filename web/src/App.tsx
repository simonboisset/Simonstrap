import React from "react";
import { AppBar, IconButton } from "simon-ui";
import "./App.css";
function App() {
  return (
    <div className="App">
      <AppBar
        leftElements={<IconButton>menu</IconButton>}
        rigthElements={<IconButton>home</IconButton>}
        title="Simon UI v2"
      />
    </div>
  );
}
export default App;
