import React from "react";
import TopBar from "./components/topbar/TopBar";
import Home  from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";

import{
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  
} 
from "react-router-dom";
import Single from "./pages/single/Single";
function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path="/register" element={user ? <Navigate to={"/"} replace/> :<Register/>} />
        <Route  path="/login" element ={user? <Navigate to = {"/"} replace />:<Login />}/>  
        <Route  path="/write" element ={ user? <Write/>:<Navigate to = {"/register"} replace/>}/> 
        <Route  path="/settings" element ={ <Settings />}/> 
        {/* <Route  path="/about" element ={ <About />}/> 
        <Route  path="/logout" element ={ <Logout />}/>  */}
        <Route path="/post/:postId"element={<Single/>}/>
        </Routes>  
    </Router>
  );
}

export default App;

