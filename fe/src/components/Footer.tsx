import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="bg-black w-full text-white fixed bottom-0 left-0 h-16 flex justify-around items-center z-20">
        <nav>
          <ul className="flex justify-around items-center gap-4 space-x-9">
            <NavLink
              to="/"
              className={`flex flex-col items-center ${({
                isActive,
              }: {
                isActive: boolean;
              }) => (isActive ? "text-red-500" : "text-gray-200")}`}
            >
              <i className="fa-solid fa-house text-2xl"></i>
              <span className="text-xs"> Home</span>
            </NavLink>
            <Link
              to="/discover"
              className="flex flex-col text-gray-200 hover:text-white text-xs items-center"
            >
              <i className="fa-solid fa-magnifying-glass text-2xl"></i>
              <span className="text-xs"> Discover</span>
            </Link>
            <Link
              to="/add"
              className="flex flex-col text-white hover:text-white "
            >
              <img
                src="https://res.cloudinary.com/dcvu7e7ps/image/upload/v1744818763/Button_Shape_s8fj3r.svg"
                alt="https://res.cloudinary.com/dcvu7e7ps/image/upload/v1744818763/Button_Shape_s8fj3r.svg"
              />
            </Link>
            <Link
              to="/mailbox"
              className="flex flex-col text-gray-200 hover:text-white0 text-xs items-center"
            >
              {" "}
              <i className="fa-regular fa-comment  text-2xl"></i>
              <span className="text-xs"> Inbox</span>
            </Link>
            <NavLink
              to="/profile"
              className={`flex flex-col items-center ${({
                isActive,
              }: {
                isActive: boolean;
              }) => (isActive ? "text-red-500" : "text-gray-200")}`}
            >
              <i className="fa-regular fa-user  text-2xl"></i>
              <span className="text-xs"> Me</span>
            </NavLink>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
