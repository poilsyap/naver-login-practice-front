import React from "react";
import {Routes, Route} from "react-router-dom";

import UserLogin from "./functions/UserLogin";
import Home from "./functions/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLogin/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
      {/* <UserLogin/> */}
    </div>
  );
}

export default App;
