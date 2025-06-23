import React, { useContext } from "react";
import guarantee from "../../../assets/guarantee.png";
import { ThemeContext } from "../../../context/theme/ThemeContext";

const GuaranteeSection: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <div className="w-full max-w-xl flex flex-col gap-2 mt-8 px-2">
      <div className="flex items-center gap-4 mb-2">
        <h3
          className="font-bold text-4xl sm:text-5xl flex-1"
          style={{ color: colors.textSecondary }}
        >
          Money Back Guarantee
        </h3>
        <img
          src={guarantee}
          alt="60 Day Money Back Guarantee"
          className="w-26 h-26"
        />
      </div>
      <p className="text-base mb-1" style={{ color: colors.textSecondary }}>
        We are confident with our service quality and its results. So, if you
        are ready to reach your goals, it’s a risk-free offer.
      </p>
      <p className="text-base mb-2" style={{ color: colors.textSecondary }}>
        We guarantee you’ll see visible results or you’ll receive a full
        refund within 60 days after your purchase.
      </p>
      <hr className="w-12 mb-2" style={{ borderColor: colors.textSecondary }} />
      <ul
        className="text-sm flex flex-col gap-2"
        style={{ color: colors.textSecondary }}
      >
        <li>
          By continuing, you represent that you are over 18 years of age and
          agree if for whatever reason you’re unhappy with your plan to
          contact customer support for a refund.
        </li>
        <li>
          You will only be charged $67 today for your first quarter (details
          above)
        </li>
        <li>
          Your introductory period will last until Aug 27, 2025. You may
          cancel at any time before Aug 27, 2025, and you will not be charged.
        </li>
      </ul>
      <div
        className="rounded-xl text-sm"
        style={{
          background: colors.background,
          color: colors.textSecondary,
        }}
      >
        <p className="mb-3">
          If you don’t cancel, KetoSlim will automatically continue your
          membership at the end of your introductory period and charge the
          membership fee of <span className="font-bold">$67 quarterly</span>{" "}
          until you cancel.
        </p>
        <p className="mb-3">
          Your subscription will be bound by our{" "}
          <a
            href="#"
            className="underline font-medium"
            style={{ color: colors.accent2 }}
          >
            Terms and Privacy Policy
          </a>
          .
        </p>
        <p>
          If you would like a refund for any reason call{" "}
          <a
            href="tel:1-800-695-5045"
            className="underline font-medium"
            style={{ color: colors.accent2 }}
          >
            1-800-695-5045
          </a>{" "}
          or email{" "}
          <a
            href="mailto:support@myketoslim.com"
            className="underline font-medium"
            style={{ color: colors.accent2 }}
          >
            support@myketoslim.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default GuaranteeSection;