import * as React from "react";
import {Link} from 'react-router-dom';

const Login: React.FC = () => {
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

                <form>
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