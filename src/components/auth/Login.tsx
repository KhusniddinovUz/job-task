import * as React from "react";
import {Link} from 'react-router-dom';
import {useAppDispatch} from "../../redux/hooks";
import {useNavigate} from "react-router-dom";
import {login} from "../../redux/action-creaters/auth";
import {bindActionCreators} from "redux";
import {RootState} from "../../store";
import {authState} from "../../redux/reducers/auth";
import {useSelector} from "react-redux";
import loader from '../loading.svg';

const Login: React.FC = () => {
    const auth = useSelector<RootState, authState>(state => state.auth);
    const loading = useSelector<RootState, boolean>(state => state.loading);
    const {isAuthenticated} = auth;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const log = bindActionCreators(login, dispatch);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
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
                    log({email: email, password: password});
                }}>
                    <div className="form-group">
                        <p className="form-text">Enter your email address</p>
                        <input required onChange={emailHandler} type="email" className="form-input"
                               placeholder="Name@example.com"/>
                    </div>
                    <div className="form-group">
                        <p className="form-text">Enter your password</p>
                        <input required onChange={passwordHandler} type="password" className="form-input"
                               placeholder="Password"/>
                    </div>
                    <button type="submit">{loading ? <img src={loader} alt="loading"/> : "Login"}
                    </button>
                </form>
            </div>
        </div>)
};

export default Login;