import React from "react";
import { AppBar, IconButton, Page } from "simon-ui";
import "./App.css";
function App() {
  return (
    <div className="App">
      <AppBar
        leftElements={<IconButton>menu</IconButton>}
        rigthElements={<IconButton>home</IconButton>}
        title="Simon UI v2"
      />
      <Page></Page>
    </div>
  );
}
export default App;
