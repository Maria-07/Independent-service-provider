import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../../firebase.init";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let errorElement;

  const handleEmailBlur = (e) => setEmail(e.target.value);
  const handlePasswordBlur = (e) => setPassword(e.target.value);

  // sign in with google
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  if (error1) {
    errorElement = <p className="text-red-500">Error: {error1.message}</p>;
  }

  // sign in with email
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (error) {
    errorElement = <p className="text-red-500">Error: {error.message}</p>;
  }

  // Password reset
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const resetPassword = async () => {
    // const email = emailRef.current.value;
    console.log(email);
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  // route navigate
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  if (user || user1) {
    navigate(from, { replace: true });
  }

  if (loading || loading1) {
    return <p>Loading...</p>;
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }

  // EventHandelar
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="mx-auto">
      <form
        onSubmit={handleUserSignIn}
        className="border-2 p-11 mt-36 w-full md:w-4/5 lg:w-1/4 mb-4 mx-auto text-center"
      >
        <h1 className=" mb-8 text-3xl">Login</h1>
        <div className=" text-left">
          <p>Email</p>
          <input
            onBlur={handleEmailBlur}
            required
            type="email"
            className="form-input px-4 py-3 rounded w-full border-2 my-2"
            placeholder="Enter your email"
          />
        </div>
        <br />
        <div className=" text-left">
          <p>Password</p>
          <input
            onBlur={handlePasswordBlur}
            required
            type="password"
            className="form-input px-4 py-3 rounded w-full border-2 my-2"
            placeholder="Enter your password"
          />
        </div>
        <br />
        {errorElement}
        {/* <p>{error?.message}</p> */}
        {loading && <p>Loading .. .. </p>}
        <input
          type="submit"
          className=" w-full bg-black rounded mt-6 mb-5 text-white  px-5 py-2 text-xl font-semibold"
          value="login"
        />
        <p>
          New to Emma Watson website?{" "}
          <Link className="text-decoration-none text-orange-400" to={"/signup"}>
            Create New Account
          </Link>
        </p>
        <p>
          Forget Password?{" "}
          <button
            onClick={resetPassword}
            className="text-decoration-none text-orange-400"
          >
            Reset Password.
          </button>
        </p>

        <div className="my-5 text-2xl font-semibold">Or</div>

        <button
          onClick={() => signInWithGoogle()}
          className=" flex items-center justify-center w-full border-2 rounded mt-2 px-5 py-2 text-lg"
        >
          <img src="google.png" className="w-10 h-10" alt="" />
          Continue with Google
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
