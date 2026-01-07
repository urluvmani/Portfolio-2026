import { memo, useRef, useCallback } from "react";

const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(y, x) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    el.style.setProperty("--start", angle + 60);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" aria-hidden />

      <div className="flex items-center gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="/images/star.png"
            alt=""
            loading="lazy"
            decoding="async"
            className="size-5"
          />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}
    </div>
  );
};

export default memo(GlowCard);
