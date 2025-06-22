import React from "react";
import guarantee from "../../../assets/guarantee.png";

const GuaranteeSection: React.FC = () => (
  <div className="w-full max-w-md flex flex-col gap-2 mt-8 px-2">
    <div className="flex items-center gap-4 mb-2">
      <h3 className="font-bold text-4xl sm:text-5xl text-[#13556F] flex-1">
        Money Back Guarantee
      </h3>
      <img
        src={guarantee}
        alt="60 Day Money Back Guarantee"
        className="w-26 h-26"
      />
    </div>
    <p className="text-[#13556F] text-base mb-1">
      We are confident with our service quality and its results. So, if you
      are ready to reach your goals, it’s a risk-free offer.
    </p>
    <p className="text-[#13556F] text-base mb-2">
      We guarantee you’ll see visible results or you’ll receive a full
      refund within 60 days after your purchase.
    </p>
    <hr className="w-12 border-[#13556F] mb-2" />
    <ul className="text-[#13556F] text-sm flex flex-col gap-2">
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
    <div className="bg-[#F9F9F9] rounded-xl text-sm text-[#13556F]">
      <p className="mb-3">
        If you don’t cancel, KetoSlim will automatically continue your
        membership at the end of your introductory period and charge the
        membership fee of <span className="font-bold">$67 quarterly</span>{" "}
        until you cancel.
      </p>
      <p className="mb-3">
        Your subscription will be bound by our{" "}
        <a href="#" className="text-[#F75950] underline font-medium">
          Terms and Privacy Policy
        </a>
        .
      </p>
      <p>
        If you would like a refund for any reason call{" "}
        <a
          href="tel:1-800-695-5045"
          className="text-[#F75950] underline font-medium"
        >
          1-800-695-5045
        </a>{" "}
        or email{" "}
        <a
          href="mailto:support@myketoslim.com"
          className="text-[#F75950] underline font-medium"
        >
          support@myketoslim.com
        </a>
        .
      </p>
    </div>
  </div>
);

export default GuaranteeSection;