import { IoMdMailOpen } from "react-icons/io";
import logo from "../assets/images/plogo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20 pb-10 px-3 md:px-0">
      <div className="flex justify-between mb-6">
        <img className="size-12 rounded-3xl" src={logo} alt="" />
        <p className="flex w-full justify-center items-center  md:gap-3 gap-1">
          <FaPhoneAlt /> +880 1627768497<span className="hidden md:flex">(whatsapp)</span>
          <IoMdMailOpen /> kausar8497@gmail.com 
        </p>
      
      </div>
      <hr />
      <div className="md:flex justify-between items-center mt-6">
        <p className="flex gap-3 ">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Tech Stack</Link>
          <Link>Contact</Link>
        </p>
        <p>All right`s reserved by Kausar Ahammed</p>
      </div>
    </div>
  );
};

export default Footer;
