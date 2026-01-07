import { memo, useCallback } from "react";

const Button = ({ text, className = "", targetId = "counter" }) => {
  const handleClick = useCallback((e) => {
    e.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = window.innerHeight * 0.15;
    const top =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  }, [targetId]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img
            src="/images/arrow-down.svg"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </button>
  );
};

export default memo(Button);
