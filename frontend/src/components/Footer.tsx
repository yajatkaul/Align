import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full mt-[30px]">
      <div className="flex bg-[#DFD3C3] h-[120px] w-full md:justify-center items-center gap-[10px]">
        <a
          href="https://www.instagram.com/align.mr.glass?igsh=ejlyNXljaml2M2Y0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareInstagram className="w-[40px] h-[40px]" />
        </a>
        <a
          href="https://www.facebook.com/share/uK7FiAEKTpgFDhcr/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="w-[40px] h-[40px]" />
        </a>
        <a
          href="https://www.linkedin.com/company/mrglassindia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-[40px] h-[40px]" />
        </a>
        <a href="https://mrglass.in/" target="_blank" rel="noopener noreferrer">
          <TbWorld className="w-[40px] h-[40px]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
