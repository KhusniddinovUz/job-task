import * as React from "react";
import {Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from "../../redux/hooks";
import {useNavigate} from "react-router-dom";
import {login} from "../../redux/action-creaters/auth";
import {bindActionCreators} from "redux";
import {RootState} from "../../store";
import {authState} from "../../redux/reducers/auth";
import {useSelector} from "react-redux";

const Login: React.FC = () => {
    // const auth = useAppSelector(state => state.auth.isAuthenticated);
    const auth = useSelector<RootState, authState>(state => state.auth);
    const {isAuthenticated} = auth;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const login1 = bindActionCreators(login, dispatch)
    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/', {replace: true});
        }
    }, [isAuthenticated, navigate])
    return (
        <div className='Register'>
            <div id='form'>
                <div>
                    <p>Welcome to Reqres</p>
                    <div>
                        <p>No account?</p>
                        <Link to={'/register'} className="main-color" style={{fontWeight: 600, fontSize: "18px"}}>
                            Register
                        </Link>
                    </div>
                </div>
                <h1>Login</h1>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    login1({email: "michael.lawson@reqres.in", password: "khus04011212"});
                }}>
                    <div className="form-group login">
                        <p className="form-text">Enter your email address</p>
                        <input type="email" className="form-input" placeholder="Name@example.com"/>
                    </div>
                    <div className="form-group login">
                        <p className="form-text">Enter your password</p>
                        <input type="password" className="form-input" placeholder="Password"/>
                    </div>
                    <button type="submit" className='login-button'>Login</button>
                </form>
            </div>
        </div>)
};

export default Login;