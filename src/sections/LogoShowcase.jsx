import { memo } from "react";
import { logoIconsList } from "../constants";

const LogoIcon = memo(({ icon }) => (
  <div className="flex-none flex-center marquee-item">
    <img
      src={icon.imgPath}
      alt={icon.name}
      loading="lazy"
      decoding="async"
      width={96}
      height={96}
    />
  </div>
));

const LogoShowcase = () => {
  const logos = [...logoIconsList, ...logoIconsList];

  return (
    <div className="md:my-20 my-10 relative overflow-hidden">
      <div className="gradient-edge pointer-events-none" />
      <div className="gradient-edge pointer-events-none" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logos.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(LogoShowcase);
