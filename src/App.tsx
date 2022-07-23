import React from 'react';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import {useAppSelector} from "./redux/hooks";
import Home from "./components/Home";
import UserPage from "./components/UserPage";

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAppSelector(state => state.auth.isAuthenticated);
    React.useEffect(() => {
        if (!auth) {
            if (location.pathname === '/register') {
                navigate('/register', {replace: true});
            } else {
                navigate('/login', {replace: true})
            }
        }
    }, [auth, location.pathname, navigate])
    return (
        <div className="App">
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/user/:id' element={<UserPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
