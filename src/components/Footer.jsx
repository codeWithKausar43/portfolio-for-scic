import { IoMdMailOpen } from "react-icons/io";
import logo from "../assets/images/plogo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20 pb-10">
      <div className="flex justify-between mb-6">
        <img className="size-12 rounded-3xl" src={logo} alt="" />
        <p className="flex items-center  gap-3">
          <FaPhoneAlt /> +880 1627768497 (whatsapp)
          <IoMdMailOpen /> kausar8497@gmail.com
        </p>
      </div>
      <hr />
      <div className="flex justify-between items-center mt-6">
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
