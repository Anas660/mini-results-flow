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
  const offerCardRef = useRef<HTMLDivElement | null>(null); // Add ref for OfferCard
  const [showStickyClaim, setShowStickyClaim] = useState(true);
  const hasHeadingBeenVisible = useRef(false);

  // Countdown state
  const [countdown, setCountdown] = useState(600); // 10 minutes in seconds
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    const planHeading = planHeadingRef.current;
    const guaranteeSection = document.getElementById("guarantee-section");
    const offerCard = offerCardRef.current;

    const isVisible = (el: HTMLElement | null) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const handleScroll = () => {
      // Hide sticky button if GuaranteeSection or OfferCard is visible
      if (isVisible(guaranteeSection) || isVisible(offerCard)) {
        setShowStickyClaim(false);
      } else {
        setShowStickyClaim(true);
      }
    };

    // IntersectionObserver for plan heading (to start timer)
    if (planHeading) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            hasHeadingBeenVisible.current = true;
            setTimerStarted(true);
          }
        },
        { root: null, threshold: 0 }
      );
      observer.observe(planHeading);

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    }
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
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-8 w-full max-w-xl mx-auto flex flex-col items-center mb-6">
        <ComparisonTable />
        <BenefitsList />
        <ToolsSection />
        <TrustedBySection />
        <div ref={offerCardRef} className="w-full">
          <OfferCard
            planHeadingRef={planHeadingRef}
            countdown={countdown}
            formatCountdown={formatCountdown}
            navigate={navigate}
          />
        </div>
      </div>
      <div id="guarantee-section">
        <GuaranteeSection />
      </div>
    </div>
  );
};

export default SalesPage;
