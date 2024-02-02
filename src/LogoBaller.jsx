import React from "react";
import logo from "./Images/roblox baller meme.png";
import "./StyleSheets/LogoBaller.css";

const LogoBaller = () => {
  return (
    <section className="logo-container">
      <img src={logo} alt="" className="logo" />
    </section>
  );
};

export default LogoBaller;
