import React from 'react';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import UserPage from "./components/UserPage";
import Alerts from "./components/Alerts";
import {useSelector} from "react-redux";
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import {RootState} from "./store";
import {authState} from "./redux/reducers/auth";

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    // const auth = useAppSelector(state => state.auth.isAuthenticated);
    const auth = useSelector<RootState, authState>(state => state.auth);
    const {isAuthenticated} = auth;
    React.useEffect(() => {
        if (!isAuthenticated) {
            if (location.pathname === '/register') {
                navigate('/register', {replace: true});
            } else {
                navigate('/login', {replace: true})
            }
        }
    }, [isAuthenticated, location.pathname, navigate])
    return (
        <div className="App">
            <Alerts/>
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
