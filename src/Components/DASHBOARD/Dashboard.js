import React from "react";
import "./Dashboard.css";
import profile from "../../Assets/profile.png";
import mop from "../../Assets/mop.png";
import { ContactEmergency, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const naviagte = useNavigate();
  return (
    <>
      <section className="dashboardsection">
        <div>
          <img className="profile" src={profile} alt="" />
        </div>

        <div className="imganddash">
          <img className="mop" src={mop} alt="" />
          <div className="number dashnum">4</div>
        </div>

        <div className="heading">
          <p className="h1">Employ Productivity Dashboard</p>
        </div>

        <section className="productivity">
          <div className="pro-per">
            <p className="p"> Productivity on Monday</p>
            <p className="percentage">4%</p>
          </div>
          <div className="bar bar01"></div>
          <div className="pro-per">
            <p className="p"> Productivity on Tuesaday</p>
            <p className="percentage">4%</p>
          </div>
          <div className="bar bar02"></div>
          <div className="pro-per">
            <p className="p"> Productivity on wednesday</p>
            <p className="percentage">4%</p>
          </div>
          <div className="bar bar03"></div>
          <div className="pro-per">
            <p className="p"> Productivity on Monday</p>
            <p className="percentage">4%</p>
          </div>
          <div className="bar bar04"></div>
          <div className="pro-per">
            <p className="p"> Productivity on Monday</p>
            <p className="percentage">4%</p>
          </div>
          <div className="bar bar05"></div>
          <div className="pro-per">
            <p className="p"> Productivity on Monday</p>
            <p className="percentage">4%</p>
          </div>
          <div className="bar bar06"></div>
        </section>
        <div className="fix-div">
          <Home></Home>
          <div
            onClick={() => {
              naviagte("/contact");
            }}
          >
            <ContactEmergency />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
