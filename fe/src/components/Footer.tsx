import path from "path";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const menu = [
    {
      name: "Home",
      icon: <i className="fa-solid fa-house text-2xl"></i>,
      path: "/",
    },
    {
      name: "Store",
      icon: <i className="fa-solid fa-bag-shopping text-2xl"></i>,
      path: "/store",
    },
    {
      icon: (
        <img
          src={`https://res.cloudinary.com/dcvu7e7ps/image/upload/v1744818763/Button_Shape_s8fj3r.svg`}
        />
      ),
      path: "/addpage",
    },
    {
      name: "Mailbox",
      icon: <i className="fa-regular fa-comment  text-2xl"></i>,
      path: "/mailbox",
    },
    {
      name: "Profile",
      icon: <i className="fa-regular fa-user  text-2xl"></i>,
      path: "/profile",
    },
  ];
  return (
    <div>
      <footer className="bg-black w-full text-white fixed bottom-0 left-0 h-16 flex justify-around items-center z-20">
        <nav>
          <ul className="flex justify-evenly items-center gap-4 space-x-9">
            {menu.map((item: any, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? " text-white flex flex-col items-center"
                    : "text-white/50 flex flex-col items-center"
                }
              >
                {item.icon}
                <span className="text-xs"> {item.name}</span>
              </NavLink>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
