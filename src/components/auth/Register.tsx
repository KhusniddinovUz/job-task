import * as React from "react";
import {Link} from "react-router-dom";

const Register: React.FC = () => {
    return (
        <div id='register'>
            <div id='form'>
                <div>
                    <p>Welcome to ArticleUz</p>
                    <div>
                        <p>Have an account?</p>
                        <Link to={'/login'} className="main-color" style={{fontWeight: 600, fontSize: "18px"}}>
                            Login
                        </Link>
                    </div>
                </div>
                <h1>Register</h1>
                <form>
                    <div className="form-group">
                        <p className="form-text">Enter your email address</p>
                        <input type="email" className="form-input" placeholder="Name@example.com"/>
                    </div>
                    <div className="form-group">
                        <p className="form-text">Enter your username</p>
                        <input type="text" className="form-input" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <p className="form-text">Enter your password</p>
                        <input type="password" className="form-input" placeholder="Password"/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>)
};

export default Register;