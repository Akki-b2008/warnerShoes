import "./Auth.css";
import authpng from "../../assets/img/auth.webp";
import google from '../../assets/img/google.webp'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../../store/actions/userActions";


const AuthPage = () => {
    const [logIn, setLogIn] = useState(false);
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const loginValidation = {
        email: { required: "Email is required" },
        password: { required: "Password is required" },
    };

    const registerValidation = {
        username: { required: "Username is required" },
        email: { required: "Email is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                message: "Must include 6+ chars, uppercase, lowercase, number & symbol.",
            },
        },
    };


    const formSubmitHandler = (data) => {
          console.log(data);
          
        dispatch(asyncRegisterUser(data))
    }

    return (
        <div className="auth-container">

            <div className="auth-left">
                <div className="auth-bg">
                </div>
            </div>

            <div className="auth-right">
                <div className="auth-card">
                    <h2>{logIn ? "Welcome back." : "Step in Style."}</h2>

                    <p className="details">Enter your Details</p>
                    <form className="auth-form" onSubmit={handleSubmit(formSubmitHandler)}>
                        {!logIn &&
                            <input
                                type="text"
                                placeholder="Username"
                                {...register("name", { required: "name is required" })}
                            />}{!logIn && errors.name && <small>{errors.name.message}</small>}

                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register("email", logIn ? loginValidation.email : registerValidation.email)}
                        />{errors.email && <small>{errors.email.message}</small>}

                        <input
                            type="password"
                            placeholder="Enter password"
                            {...register("password", logIn ? loginValidation.password : registerValidation.password)}
                        />
                        {errors.password && <small>{errors.password.message}</small>}

                        {logIn && <p className="forgot-password">Forgot password ?</p>}

                        {logIn && <div className="remember-user">
                            <p className="remember">Remember me</p>
                            <label className="remember-toggle">
                                <input type="checkbox" />
                                <span className="slider" />
                            </label>
                        </div>}


                        <button type="submit">{logIn ? "Login" : "Register"}</button>
                    </form>

                    <div className="divider">
                        <span>or</span>
                    </div>

                    <div className="social-buttons">
                        <button><img src={google} alt="Google login" /> Google</button>
                    </div>

                    <p className="toggle-text">
                        {logIn ? "Don't have an account ?" : "Already have an account ?"}{" "}
                        <span onClick={() => setLogIn(!logIn)}>
                            {logIn ? "Sign up" : "Log in"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
