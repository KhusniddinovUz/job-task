import React from 'react';
import Home from "./components/Home";
import UserPage from "./components/UserPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import {Routes, Route, Navigate} from 'react-router-dom';
import {useAppSelector} from "./redux/hooks";

function App() {
    const auth = useAppSelector(state => state.auth.isAuthenticated);
    return (
        <div className="App">
            {!auth && <Navigate replace to='/login'/>}
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
