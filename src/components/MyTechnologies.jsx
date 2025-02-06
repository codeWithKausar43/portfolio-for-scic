import { motion } from "framer-motion";
import html from "../assets/images/html-5.png";
import css from "../assets/images/css-3.png";
import js from "../assets/images/java-script.png";
import react from "../assets/images/atom.png";
import next from "../assets/images/nextjs.png";
import bootstrap from "../assets/images/bo.png";
import tailwind from "../assets/images/tailwind.png";
import materialUi from "../assets/images/materialU.png";
import firebase from "../assets/images/firebase.png";
import mongodb from "../assets/images/mongodb.png";
import github from "../assets/images/github.png";
import vscode from "../assets/images/vscode.png";

const MyTechnologies = () => {
  return (
    <div className=" mp-12">
      <div className="lg:max-w-[1100px] mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">My Tech Stack</h3>
          <p className="text-lg">Technologies ive been working with recently</p>
        </div>
        <div className="grid grid-cols-6 md:gap-20 text-center mt-12">
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={html}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={css}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={js}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={react}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={next}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={bootstrap}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={tailwind}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={materialUi}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={firebase}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={mongodb}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={github}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="border text-center flex items-center justify-center p-6 rounded-lg border-indigo-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="size-12"
              src={vscode}
              alt=""
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyTechnologies;
