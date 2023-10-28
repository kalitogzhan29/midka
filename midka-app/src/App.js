import './App.css';
import React from 'react'
import Navbar from './component/navbar/navbar';
import Home from "./pages/HomePage"
import { Route,BrowserRouter,Routes}  from "react-router-dom"
import Footer from './component/footer/footer'
import {createContext} from "react"
import Profile from './pages/Profile';
import Post from './pages/PostPage'



function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar/>
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/post" element={<Post/>}/>
        
        </Routes> 
       <Footer/>
      </BrowserRouter>
   </div>
  );
}

export default App;