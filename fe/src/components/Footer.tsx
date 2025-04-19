import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="bg-black w-full text-white fixed bottom-0 left-0 h-16 flex justify-around items-center z-20">
        <nav>
          <ul className="flex justify-around items-center gap-4 space-x-9">
            <Link
              to="/"
              className="flex flex-col text-white hover:text-gray-200  items-center"
            >
              <i className="fa-solid fa-house text-2xl"></i>
              <span className="text-xs"> Home</span>
            </Link>
            <Link
              to="/discover"
              className="flex flex-col text-white hover:text-gray-200 text-xs items-center"
            >
              <i className="fa-solid fa-magnifying-glass text-2xl"></i>
              <span className="text-xs"> Discover</span>
            </Link>
            <Link
              to="/add"
              className="flex flex-col text-white hover:text-gray-200 "
            >
              <img
                src="https://res.cloudinary.com/dcvu7e7ps/image/upload/v1744818763/Button_Shape_s8fj3r.svg"
                alt="https://res.cloudinary.com/dcvu7e7ps/image/upload/v1744818763/Button_Shape_s8fj3r.svg"
              />
            </Link>
            <Link
              to="/inbox"
              className="flex flex-col text-white hover:text-gray-200 text-xs items-center"
            >
              {" "}
              <i className="fa-regular fa-comment  text-2xl"></i>
              <span className="text-xs"> Inbox</span>
            </Link>
            <Link
              to="/profile"
              className="flex flex-col text-white hover:text-gray-200 text-xs items-center"
            >
              <i className="fa-regular fa-user  text-2xl"></i>
              <span className="text-xs"> Me</span>
            </Link>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
