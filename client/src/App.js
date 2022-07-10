import { BrowserRouter, Routes, Route } from "react-router-dom";
import Campus from "./pages/campus/Campus";
import Home from "./pages/home/Home";
import Offices from "./pages/offices/Offices";
import Login from "./pages/login/Login";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/campus" element = {<Campus/>} />
        <Route path="/campus/:id" element = {<Offices/>} />
        <Route path="/login" element = {<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;