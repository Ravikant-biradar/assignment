import React, { useState } from "react";
import "./Registration.css";
import { app } from "../../Firebaseconfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import img from "../../Assets/Group3.png";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [err, seterr] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dashboard = useNavigate();
  const navigate = useNavigate();

  // form submit

  async function formsubmit(e) {
    e.preventDefault();
    const auth = getAuth(app);
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (usercred) => {
          const user = usercred.user;
        }
      );
      dashboard("/dashboard");
    } catch (error) {
      seterr(true);
      console.log("moooo");
    }
  }
  return (
    <>
      <section className="regsection">
        <div className="log-divs">
          <img className="logo" src={img} alt="" srcset="" />
        </div>
        <form className="form" onSubmit={formsubmit}>
          <input
            onChange={(e) => {
              setname(e.target.value);
            }}
            placeholder="name"
            className="input01 reginput01"
            type="text"
          />
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="email"
            className="input02 reginput"
            type="email"
          />
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="password"
            className="input02 reginput"
            type="password"
          />
          <button type="submit" className="sighbtn">
            Sign-up
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="logbtn"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
}

export default Registration;
