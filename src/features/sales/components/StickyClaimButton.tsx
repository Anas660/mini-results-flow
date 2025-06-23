import React from "react";
import { ArrowRight } from "react-feather";

const StickyClaimButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4 pointer-events-none">
    <button
      className="bg-[#36BC9F] hover:bg-[#2ea88c] text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center transition w-full relative pointer-events-auto shadow-lg"
      style={{
        boxShadow: "0 2px 8px 0 rgba(54,188,159,0.10)",
        alignSelf: "center",
      }}
      onClick={onClick}
      aria-label="Scroll to plan section"
    >
      <span className="mx-auto">Claim My Plan</span>
      <span className="absolute right-6 text-lg">
        <ArrowRight size={20} style={{ color: "white" }} />
      </span>
    </button>
  </div>
);

export default StickyClaimButton;