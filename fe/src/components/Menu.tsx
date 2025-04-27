import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const menu = [
    {
      name: "Đã follow",
      path: "/following",
    },
    {
      name: "Bạn bè",
      path: "/friends",
    },
  ];
  return (
    <ul className="flex justify-center mt-8 space-x-6 ">
      {menu.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "text-white cursor-pointer text-base font-bold"
                : "text-gray-300 hover:text-white cursor-pointer text-base font-bold"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
