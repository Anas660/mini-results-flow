import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <div
      className="w-full flex justify-center pt-6 pb-2"
      style={{ background: colors.background }}
    >
      <img src={logo} alt="Logo" className="h-10" />
    </div>
  );
};

export default Header;