import React from "react";
import logo from "../../../assets/logo.png";

const Header: React.FC = () => (
  <div className="w-full flex justify-center pt-6 pb-2">
    <img src={logo} alt="Logo" className="h-10" />
  </div>
);

export default Header;