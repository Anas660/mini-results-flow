import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import StickyClaimButton from "./components/StickyClaimButton";
import Header from "./components/Header";
import ComparisonTable from "./components/ComparisonTable";
import BenefitsList from "./components/BenefitsList";
import ToolsSection from "./components/TooldsSection";
import TrustedBySection from "./components/TrustedBySection";
import OfferCard from "./components/OfferCard";
import GuaranteeSection from "./components/GuaranteeSection";

const SalesPage: React.FC = () => {
  const navigate = useNavigate();
  const planHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const [showStickyClaim, setShowStickyClaim] = useState(true);
  const hasHeadingBeenVisible = useRef(false);

  // Countdown state
  const [countdown, setCountdown] = useState(600); // 10 minutes in seconds
  const [timerStarted, setTimerStarted] = useState(false);

  // Observe heading for sticky button and timer start
  useEffect(() => {
    const planHeading = planHeadingRef.current;
    if (!planHeading) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasHeadingBeenVisible.current = true;
          setShowStickyClaim(false);
          setTimerStarted(true);
        } else if (!hasHeadingBeenVisible.current) {
          setShowStickyClaim(true);
        }
      },
      { root: null, threshold: 0 }
    );
    observer.observe(planHeading);
    return () => observer.disconnect();
  }, []);

  // Countdown effect
  useEffect(() => {
    if (!timerStarted) return;
    if (countdown <= 0) return;
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timerStarted, countdown]);

  // Format countdown as MM:SS
  const formatCountdown = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(1, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-2 sm:px-4 py-6">
      {showStickyClaim && (
        <StickyClaimButton
          onClick={() =>
            planHeadingRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        />
      )}
      <Header />
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-8 w-full max-w-md mx-auto flex flex-col items-center mb-6">
        <ComparisonTable />
        <BenefitsList />
        <ToolsSection />
        <TrustedBySection />
        <OfferCard
          planHeadingRef={planHeadingRef}
          countdown={countdown}
          formatCountdown={formatCountdown}
          navigate={navigate}
        />
      </div>
      <GuaranteeSection />
    </div>
  );
};

export default SalesPage;
