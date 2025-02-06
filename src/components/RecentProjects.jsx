import hostel from "../assets/images/hostel.png";
import github from "../assets/images/github.png";
import { Link } from "react-router-dom";
 
const RecentProjects = () => {
  return (
    <div id="projects" className="my-20">
      <h3 className="text-2xl text-center mb-20">My Recent Project</h3>
      <div className="flex gap-12 mt-20">
        <div className="w-1/2">
          <h4 className="text-xl font-bold mb-2">Hostel Management</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quas officiis totam voluptatibus qui cumque molestias magni eum
            corporis reiciendis dolores voluptatum harum, dolor autem incidunt
            molestiae, debitis, explicabo commodi fuga expedita atque
            consequuntur ipsa? Vero tenetur facilis, ab unde sunt quasi id
            doloremque ea, consequatur recusandae optio aperiam rem odio harum,
            suscipit aspernatur animi eius sint tempore reiciendis in iure.
          </p>
          <p className="flex gap-2 mt-2 font-bold">
            <span>React</span>
            <span>Express</span>
            <span>MongoDb</span>
            <span>Tanstack</span>
            <span>Tailwind</span>
          </p>
          <div className="mt-4 gap-7 flex justify-start">
            <button className="px-6 py-1 text-lg font-semibold rounded-xl border border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white transition duration-300 shadow-md hover:shadow-lg active:scale-95">
              <Link
                to="https://hostel-management-4286f.web.app/"
                target="_blank"
              >
                Live
              </Link>
            </button>
            <button className="hover:text-green-500 ">
              <Link
                to="https://github.com/codeWithKausar43/Hostel-Management-Client"
                target="_blank"
              >
                <div className="flex items-center gap-3">
                  <img className="size-8" src={github} alt="" />
                  <span>Client code</span>
                </div>
              </Link>
            </button>
            <button className="hover:text-green-500 ">
              <Link
                to="https://github.com/codeWithKausar43/Hostel-Management-Server"
                target="_blank"
              >
                <div className="flex items-center gap-3">
                  <img className="size-8" src={github} alt="" />
                  <span>Server Code</span>
                </div>
              </Link>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img className="rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105 animate-fade-in" src={hostel} alt="" />
        </div>
      </div>

      {/* project number 2 */}
      <div className="flex gap-12 mt-20 flex-row-reverse">
        <div className="w-1/2">
          <h4 className="text-xl font-bold mb-2">Hostel Management</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quas officiis totam voluptatibus qui cumque molestias magni eum
            corporis reiciendis dolores voluptatum harum, dolor autem incidunt
            molestiae, debitis, explicabo commodi fuga expedita atque
            consequuntur ipsa? Vero tenetur facilis, ab unde sunt quasi id
            doloremque ea, consequatur recusandae optio aperiam rem odio harum,
            suscipit aspernatur animi eius sint tempore reiciendis in iure.
          </p>
          <p className="flex gap-2 mt-2 font-bold">
            <span>React</span>
            <span>Express</span>
            <span>MongoDb</span>
            <span>Tanstack</span>
            <span>Tailwind</span>
          </p>
          <div className="mt-4 gap-7 flex justify-start">
            <button className="px-6 py-1 text-lg font-semibold rounded-xl border border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white transition duration-300 shadow-md hover:shadow-lg active:scale-95">
              <Link
                to="https://hostel-management-4286f.web.app/"
                target="_blank"
              >
                Live
              </Link>
            </button>
            <button className="hover:text-green-500 ">
              <Link
                to="https://github.com/codeWithKausar43/Hostel-Management-Client"
                target="_blank"
              >
                <div className="flex items-center gap-3">
                  <img className="size-8" src={github} alt="" />
                  <span>Client code</span>
                </div>
              </Link>
            </button>
            <button className="hover:text-green-500 ">
              <Link
                to="https://github.com/codeWithKausar43/Hostel-Management-Server"
                target="_blank"
              >
                <div className="flex items-center gap-3">
                  <img className="size-8" src={github} alt="" />
                  <span>Server Code</span>
                </div>
              </Link>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img className=" rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105 animate-fade-in" src={hostel} alt="" />
        </div>
      </div>
      {/* project number 3 */}
      <div className="flex gap-12 mt-20">
        <div className="w-1/2">
          <h4 className="text-xl font-bold mb-2">Hostel Management</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quas officiis totam voluptatibus qui cumque molestias magni eum
            corporis reiciendis dolores voluptatum harum, dolor autem incidunt
            molestiae, debitis, explicabo commodi fuga expedita atque
            consequuntur ipsa? Vero tenetur facilis, ab unde sunt quasi id
            doloremque ea, consequatur recusandae optio aperiam rem odio harum,
            suscipit aspernatur animi eius sint tempore reiciendis in iure.
          </p>
          <p className="flex gap-2 mt-2 font-bold">
            <span>React</span>
            <span>Express</span>
            <span>MongoDb</span>
            <span>Tanstack</span>
            <span>Tailwind</span>
          </p>
          <div className="mt-4 gap-7 flex justify-start">
            <button className="px-6 py-1 text-lg font-semibold rounded-xl border border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white transition duration-300 shadow-md hover:shadow-lg active:scale-95">
              <Link
                to="https://hostel-management-4286f.web.app/"
                target="_blank"
              >
                Live
              </Link>
            </button>
            <button className="hover:text-green-500 ">
              <Link
                to="https://github.com/codeWithKausar43/Hostel-Management-Client"
                target="_blank"
              >
                <div className="flex items-center gap-3">
                  <img className="size-8" src={github} alt="" />
                  <span>Client code</span>
                </div>
              </Link>
            </button>
            <button className="hover:text-green-500 ">
              <Link
                to="https://github.com/codeWithKausar43/Hostel-Management-Server"
                target="_blank"
              >
                <div className="flex items-center gap-3">
                  <img className="size-8" src={github} alt="" />
                  <span>Server Code</span>
                </div>
              </Link>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img className=" rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105 animate-fade-in" src={hostel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
