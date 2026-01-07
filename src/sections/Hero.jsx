import { useRef, lazy, Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

// lazy load 3D
const HeroExperience = lazy(() =>
  import("../components/models/hero_models/HeroExperience")
);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        heroRef.current.querySelectorAll("h1"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: "power2.out",
        }
      );
    },
    { scope: heroRef, dependencies: [] }
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative overflow-hidden"
    >
      {/* background image lazy */}
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <img
          src="/images/bg.png"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="hero-layout">
        {/* LEFT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          width={48}
                          height={48}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10">
              Hi, I’m Abdul Rehman, a developer based in Croatia with a passion for code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT – 3D */}
        <figure>
          <div className="hero-3d-layout">
            <Suspense fallback={<div className="h-[420px]" />}>
              <HeroExperience />
            </Suspense>
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
