import React from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {Toaster} from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const {authUser} = useAuthContext()
  return( 
  <div className="p-4 h-screen flex items-center justify-center">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={authUser ? <Navigate to={"/"}/>:<Signup />}/>
    </Routes>
    <Toaster/>
  </div>
  )
};

export default App;
