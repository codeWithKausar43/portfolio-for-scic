import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";

const Connect = () => {
  return (
    <div className="px-3">
      <h3 className="text-2xl font-bold text-center mb-12">Connect With Me</h3>
      <div className="md:flex items-center border rounded-xl md:px-12 px-6 py-6 ">
        <div className="md:w-1/2  space-y-3">
          <h3 className="text-2xl font-bold mb-4">Let`s Work Together!</h3>
          <p>
            I design and code beautifully simple things and i love what i do.
            just simple like that!
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot /> Mymensingh, Bangladesh
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +880 1627768497 (whatsapp)
          </p>
          <p className="flex items-center gap-2">
            <IoMdMailOpen /> kausar8497@gmail.com
          </p>
        </div>
        <div className="md:w-1/2 hidden-border-l  md:pl-6 md:ml-6">
        <label>Name: </label>
        <input className="w-full mb-2 h-10 mt-2 pl-3 rounded-md" placeholder="Your Name" type="text" />
        <label>Email: </label>
        <input className="w-full mb-4 h-10 mt-2 pl-3 rounded-md" placeholder="Your Email" type="email" />
        <label>Message: </label>
        <textarea className="w-full mt-4 h-24 rounded-md"id=""></textarea>
        <input className="w-full border-green-600 text-green-600 font-bold hover:bg-green-600 cursor-pointer duration-700 hover:text-white mb-4 h-10 mt-2 pl-3 rounded-md border" type="submit" value="Send Message" />
        </div>
      </div>
    </div>
  );
};

export default Connect;
