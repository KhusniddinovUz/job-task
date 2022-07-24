import * as React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks";
import {RootState} from "../../store";
import {authState} from "../../redux/reducers/auth";
import {useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {register} from "../../redux/action-creaters/auth";

const Register: React.FC = () => {
    const dispatch = useAppDispatch();
    const reg = bindActionCreators(register, dispatch);
    const auth = useSelector<RootState, authState>(state => state.auth);
    const {isAuthenticated} = auth;
    const navigate = useNavigate();
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
                        <p>Have an account?</p>
                        <Link to={'/login'} className="main-color" style={{fontWeight: 600, fontSize: "18px"}}>
                            Login
                        </Link>
                    </div>
                </div>
                <h1>Register</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    reg({email: email, password: password})

                }}>
                    <div className="form-group">
                        <p className="form-text">Enter your email address</p>
                        <input onChange={emailHandler} required type="email" className="form-input"
                               placeholder="Name@example.com"/>
                    </div>
                    <div className="form-group">
                        <p className="form-text">Enter your password</p>
                        <input onChange={passwordHandler} required type="password" className="form-input"
                               placeholder="Password"/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>)
};

export default Register;