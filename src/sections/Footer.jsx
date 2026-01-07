import { socialImgs } from "../constants";

const socialLinks = [
  "https://www.instagram.com/b0ld._.boy/",
  "https://www.facebook.com/abdulrehman.yt.5",
  "https://x.com/",
  "https://www.linkedin.com/in/abdul-rehman-b85648389/",
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
