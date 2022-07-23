import React from 'react';
import Home from "./components/Home";
import UserPage from "./components/UserPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/user/:id' element={<UserPage/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
