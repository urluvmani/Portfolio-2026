import { memo } from "react";
import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-6">
          {testimonials.map((t) => (
            <GlowCard key={t.name} card={t}>
              <div className="flex items-center gap-3">
                <img
                  src={t.imgPath}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-white-50">{t.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
