import React, { useState } from "react";
import "./Login.css";
import img from "../../Assets/Group3.png";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../Firebaseconfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const [err, seterr] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  console.log(email, password);

  const dashboard = useNavigate();
  const navigate = useNavigate();
  function navigateToDashBoard() {
    dashboard("/dashboard");
  }

  // login function using firebase

  async function loginfunction(e) {
    if (email == "" || password == "") {
      alert("plz do enter");
      e.preventDefault();
      const auth = getAuth(app);
      try {
        await signInWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user;
          }
        );
        navigate("/dashboard");
      } catch (error) {
        seterr(true);
        console.log("error");
      }
    }
  }

  return (
    <>
      <section className="loginsection">
        <div className="log-divs">
          <img className="logo" src={img} alt="" srcset="" />
        </div>
        <form className="loginform" onSubmit={loginfunction}>
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="email"
            className="input01"
            type="text"
          />
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="password"
            className="input02"
            type="password"
          />
          <button onClick={navigateToDashBoard} className="loginbtn">
            Instant Login
          </button>

          <button type="submit" className="loginbtn">
            Login
          </button>
          <button
            onClick={() => {
              navigate("/registration");
            }}
            className="loginbtn"
          >
            Register Here
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
