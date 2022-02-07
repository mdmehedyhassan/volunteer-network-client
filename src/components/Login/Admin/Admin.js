import React, { useContext, useState } from 'react';
import './Admin.css'
import { useForm } from 'react-hook-form';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseConfig } from '../../Firebase/firebase.Config';
import { UserContext } from '../../../App';
import Logo from '../../../images/logo.png'


initializeApp(firebaseConfig);

const Admin = () => {
    const [loginUser, setLoginUser] = useContext(UserContext);
    const [isHaveAccount, setIsHaveAccount] = useState(true);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const auth = getAuth();

    const onSubmit = data => {
        const { name, email, password, confirmPassword } = data;
        if (!isHaveAccount && name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((res) => {
                        const newUser = {
                            name: name,
                            email: res.user.email
                        }
                        setLoginUser(newUser);
                        updateUserHandler(name);
                        reset();
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }
            else {
                alert("Password and Confirm Password are not matched");
            }
        }
        if (isHaveAccount && email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    const getUser = {
                        name: res.user.displayName,
                        email: res.user.email
                    }
                    setLoginUser(getUser);
                    reset();
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    };

    const updateUserHandler = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((err) => {
            console.log(err)
        });
    };



    const googleSignupHandler = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                const getUser = {
                    name: res.user.displayName,
                    email: res.user.email
                }
                setLoginUser(getUser);
            }).catch((err) => {
                console.log(err);
            });
    };

    const logOutHandler = () => {
        signOut(auth).then(() => {
            setLoginUser({})
        }).catch((err) => {
            console.log(err);
        });

    };
    return (
        <div className="text-center">
            <div>
                <img className="w-50" src={Logo} alt="" />
            </div>
            {
                loginUser.email ?
                    <div>
                        <div className="text-center text-light p-5 mt-4 box-shadow-style">
                            <h4>Name: {loginUser.name}</h4>
                            <p>Email: {loginUser.email}</p>
                        </div>
                        <div className="mb-5 mt-5">
                            <button onClick={logOutHandler} className="btn btn-danger form-control p-2 text-light box-shadow-style">Log out</button>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="p-5 text-light mt-4 box-shadow-style">
                            <h4>Login with</h4>
                            <form onSubmit={handleSubmit(onSubmit)} className="text-start">
                                {
                                    isHaveAccount ||
                                    <div>
                                        <label htmlFor="name">Name:</label>
                                        <input className="form-control" {...register("name", { required: true, minLength: 6 })} placeholder="Name" />
                                        {errors.password && <span className="text-danger">Name is required minimum 6 Characters</span>}
                                        <br />
                                    </div>
                                }

                                <label htmlFor="email">Email:</label>
                                <input className="form-control" type="text" {...register("email", { pattern: /\S+@\S+\.\S+/i })} placeholder="Username or Email" />
                                {errors.email && <span className="text-danger">Email is required give like user@example.com</span>}
                                <br />
                                <label htmlFor="password">Password</label>
                                <input className="form-control" {...register("password", { required: true, minLength: 6 })} placeholder="Password" />
                                {errors.password && <span className="text-danger">Password is required minimum 6 Characters</span>}
                                {
                                    isHaveAccount ||
                                    <div>
                                        <br />
                                        <label htmlFor="confirmPassword">Confirm Password:</label>
                                        <input className="form-control" {...register("confirmPassword")} placeholder="Confirm Password" />
                                    </div>
                                }
                                <br />
                                <input className="form-control btn btn-primary" type="submit" value={isHaveAccount ? "Login" : "Sign in"} />
                                <br />
                                <br />
                                <h5 className="text-center">{isHaveAccount ? "Don't have an account?" : "Already have an account?"} <span onClick={() => setIsHaveAccount(!isHaveAccount)} style={{ textDecoration: "underline", color: "gold" }}>{isHaveAccount ? "Create an account" : "Sign in"}</span> </h5>
                            </form>
                        </div>
                        <div className="text-light mt-4 mb-4">
                            <h2>-----------Or------------</h2>
                        </div>
                        <div className="mb-5 mt-5">
                            <button onClick={googleSignupHandler} className="btn form-control p-2 text-light btn-primary box-shadow-style">Sign in with Google</button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Admin;