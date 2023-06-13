import React from "react";

function App() {
  return (
    <div className="App">
      <h1>主应用</h1>
      <div className="mainapp-main">
        {/* 子应用 */}
        <main id="subapp-viewport"></main>
      </div>
    </div>
  );
}

export default App;
