import { useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");

      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper project-card">
            <div className="image-wrapper">
              <img
                src="/images/project1.png"
                alt="Ecommerce App"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-content">
              <h2>
                Fully functional luxury e-commerce application with a premium,
                modern UI focused on performance.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project project-card">
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Discipline Maker Application"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h2>The Discipline Maker Application</h2>
            </div>

            <div className="project project-card">
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src="/images/project3.png"
                  alt="YC Directory App"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h2>Linktree — All your links at one place.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AppShowcase);
