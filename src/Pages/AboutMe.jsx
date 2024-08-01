
import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { SideBar } from "../Component/SideBar";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
    <Navbar />
    <main className="flex flex-col md:flex-row gap-3 bg-gray-100 min-h-screen">
      <SideBar />
      <div className="flex flex-col w-full mt-7 p-4 md:p-6">
        <h3 className="w-full ml-4 font-bold text-2xl">
          <b>About Me</b>
        </h3>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <p className="text-lg">
            Hi, I'm Bhakti Agrawal, a passionate frontend developer who enjoys creating web applications and continuously learning new technologies.
          </p>
          <p className="text-lg mt-4">
            In my spare time, I love exploring new coding challenges and improving my existing skills. I'm dedicated to delivering high-quality code and working on projects that make a difference.
          </p>
          <div className="flex mt-6 space-x-4">
            <a
              href="https://www.linkedin.com/in/bhakti-agrawal-a88b51214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/bhaktiagrawal088"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700"
            >
              <FaGithub size={30} />
            </a>
          </div>
          <p className="mb-2">
            <a 
            href="mailto:bhaktiagrawal286@gmail.com" 
            className="text-blue-500"
            >bhaktiagrawal286@gmail.com</a>
          </p>
          <p className="text-lg mt-4">
            If you have any questions or suggestions, please do not hesitate to reach out.
          </p>
        </div>
      </div>
    </main>
  </>
  );
};

export default AboutMe;
