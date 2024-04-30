import { Route, Routes } from "react-router-dom";
import Conversations from "./components/sidebar/Conversations";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import {Toaster} from 'react-hot-toast'
function App() {
  return (
   <div className="flex items-center justify-center h-screen p-4">
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/signup" element={<SignUp />} />;
      <Route path="/login" element={<Login />} />;
      
    </Routes>
    <Toaster/>
  
   </div>
  );
}

export default App;
