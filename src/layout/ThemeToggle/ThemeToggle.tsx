import { useContext } from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { dark, toggle, colors } = useContext(ThemeContext);

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold transition"
      style={{
        background: colors.cardBackground,
        color: colors.textPrimary,
        border: `2px solid ${colors.cardBorder}`,
        cursor: "pointer",
      }}
      aria-label="Toggle dark mode"
      type="button"
      onMouseOver={e => (e.currentTarget.style.background = colors.accent)}
      onMouseOut={e => (e.currentTarget.style.background = colors.cardBackground)}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
