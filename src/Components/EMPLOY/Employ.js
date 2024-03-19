import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { employdata } from "../../Data";
import "./Employ.css";
import icon from "../../Assets/profile.png";
import loco from "../../Assets/mop.png";

import { Contacts, Home, Search } from "@mui/icons-material";
function Employ() {
  const [data, setdata] = useState(employdata);
  const [input, setinput] = useState("");
  const [filterednames, setfilterednames] = useState([]);

  // console.log(input);
  // console.log(filterednames);

  const navigate = useNavigate();

  // filter function
  function filterdata() {
    const given = data.filter((names) =>
      names.name.toLowerCase().includes(input.toLowerCase())
    );
    setfilterednames(given);
  }

  // navigatetohome
  function navigatetohome() {
    navigate("/dashboard");
  }
  return (
    <>
      <section className="employsection">
        <div>
          <img className="icon" src={icon} alt="" />
        </div>
        <div className="locodiv">
          <img className="loco" src={loco} alt="" />
          <div className="number">4</div>
        </div>
        <input
          onChange={(e) => {
            setinput(e.target.value);
            filterdata();
          }}
          placeholder="search with name "
          className="eminput"
          type="text"
        />
        <div className="search">
          <Search></Search>
        </div>
        <div
          className={`apidatamaimdiv  ${input ? "apidatanone" : ""}   ${
            input === "" ? "show" : ""
          }`}
        >
          {data.map((value, index) => (
            <div className="apidatadiv">
              <h5>{`EMPLOY ID : ${value.id}`}</h5>
              <h1 className="extraone">{value.id}</h1>
              <h5>{`Name  : ${value.name}`}</h5>
              <h5>
                EMPLOY ID : <span class="role-styling">{value.role}</span>
              </h5>

              <h5>
                EMPLOY ID : <span class="role-st">{value.role}</span>
              </h5>
            </div>
          ))}
        </div>
      </section>
      <section className="fix">
        <div onClick={navigatetohome}>
          <Home></Home>
        </div>
        <Contacts />
      </section>
      <section
        className={`apifilter apifiltercss ${input == "" ? "apinone" : ""} `}
      >
        {filterednames.map((emp) => (
          <div className="apidatadiv apidatadivcss ">
            <h5>{`EMPLOY ID : ${emp.id}`}</h5>
            <h1 className="extraone extraonecss">{emp.id}</h1>
            <h5>{`Name  : ${emp.name}`}</h5>
            <h5>
              EMPLOY ID : <span class="role-styling">{emp.role}</span>
            </h5>

            <h5>
              EMPLOY ID : <span class="role-st">{emp.role}</span>
            </h5>
          </div>
        ))}
      </section>
    </>
  );
}

export default Employ;
