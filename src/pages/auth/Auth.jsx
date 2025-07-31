import "./Auth.css";
import authpng from "../../assets/img/authPage.png";
import github from '../../assets/img/github.png'
import google from '../../assets/img/google.webp'
import { useState } from "react";

const AuthPage = () => {

    const [logIn, setLogIn] = useState(false)

    return (
        <div className="auth-page">
            {/* Left Side Illustration */}
            <div className="auth-illustration">
                <img
                    src={authpng}
                    alt="Shoe Shop Illustration"
                />
            </div>

            {/* Right Side Auth Form */}
            <div className="auth-form-container">
                <div className="auth-header">
                    <h1>{logIn ? "Welcome back." : "Get stylish with every step."}</h1>
                </div>

                <form className="auth-form">
                    {logIn ?
                        <>
                            <input type="email" placeholder="Email address" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Log in</button>
                        </>
                        :
                        <>
                            <input type="text" placeholder="Username" />
                            <input type="email" placeholder="Email address" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Register</button>
                        </>}

                </form>

                <div className="auth-divider">
                    {logIn ? "or login with" : "  or sign up with"}
                </div>

                <div className="auth-socials">
                    <button><img src={google} alt="Google" /></button>
                    <button><img src={github} alt="GitHub" /></button>
                </div>

                <p className="auth-login">
                    {logIn ? "Don't have an account ? " : "Already have an account ? "}
                    <span onClick={() => setLogIn(!logIn)} style={{ cursor: "pointer", color: "#007bff" }}>
                        {logIn ? "Sign up" : "Log in"} </span>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;