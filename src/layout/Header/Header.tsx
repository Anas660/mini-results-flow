import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { ThemeContext } from "../../context/theme/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div
      className="w-full flex justify-center pt-6 pb-2 cursor-pointer"
      style={{ background: colors.background }}
      onClick={() => navigate("/")}
      role="button"
    >
      <img src={logo} alt="Logo" className="h-10" />
    </div>
  );
};

export default Header;
