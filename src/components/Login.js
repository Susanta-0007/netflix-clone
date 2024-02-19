import React, { useRef, useState } from "react";
import Header from "./Header";
import { USER_AVTAR } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isGuest,setIsGuest]=useState("hidden");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handelButtonclick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    // Sign in Sign up

    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse")
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const handleGuest = () => {
    setIsGuest("");
  };

  return (
    <div className="w-[100%]">
      <Header />
      <div className="absolute">
        <img
          className="h-[100vh] w-[100vw]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="screen"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  w-[35%] text-lg max-md:text-md
         max-lg:w-[50%]  max-md:w-[95%]  my-24 bg-black p-12 max-md:p-5 m-auto right-0 left-0 bg-opacity-80 rounded-sm flex flex-col justify-center "
      >
        <p className="text-3xl text-white font-bold m-2 pb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-3 m-2  border-white border-[1px] rounded-sm w-[90%] "
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-3 m-2  border-white border-[1px] rounded-sm w-[90%]"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-3 m-2  border-white border-[1px] rounded-sm w-[90%]   "
          type="text"
          placeholder="Password"
        />
        <p className="text-semibold text-red-600 m-2 ">{errorMessage}</p>
        <button
          onClick={() => handelButtonclick()}
          className="p-2 m-2  bg-red-600 text-white font-semibold rounded-sm w-[90%]"
        >
          {isSignInForm ? "Login" : "Sign Up"}
        </button>

        <div className="flex gap-5 items-center">
          <p className="text-gray-500 font-semibold m-2 ">
            {isSignInForm ? "New to Netflix ?" : "Already have an account ?"}
            <span
              className="text-white cursor-pointer pX-5"
              onClick={() => toggleSignIn()}
            >
              {" "}
              {isSignInForm ? "Sign Up now" : "Sign In now"}
            </span>
          </p>
          <p
            onClick={() => handleGuest()}
            className="text-red-500 cursor-pointer"
          >
            {" "}
            Guest
          </p>
          
        </div>
        <div className={`text-red-400 ${isGuest}`}>
            <p>Username: testapp@gmail.com</p>
            <p>Password: Test@123</p>
          </div>
      </form>
    </div>
  );
};

export default Login;
