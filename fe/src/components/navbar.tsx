import { NavLink } from "react-router-dom";
import { Image } from "@heroui/image";
import { logo } from "@/assets/PageImage";
import { useEffect, useState } from "react";
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
}
const Navbar = () => {
  const isMobile = useIsMobile();
  const menu = [
    {
      name: "Tìm kiếm",
      icon: <i className="fa-solid fa-house text-2xl"></i>,
      path: "/search",
      innerWidth: "detop",
    },
    {
      name: "Home",
      icon: <i className="fa-solid fa-house text-2xl"></i>,
      path: "/",
      innerWidth: "all",
    },
    {
      name: "Khám Phá",
      icon: <i className="fa-regular fa-compass text-2xl"></i>,
      path: "/ff",
      innerWidth: "detop",
    },
    {
      name: "Đã follow",
      icon: <i className="fa-regular fa-user-check text-2xl"></i>,
      path: "/ss",
      innerWidth: "detop",
    },
    {
      name: "Bạn bè",
      icon: <i className="fa-light fa-user-group text-2xl"></i>,
      path: "/fs",
      innerWidth: "detop",
    },
    {
      name: "Store",
      icon: <i className="fa-solid fa-bag-shopping text-2xl"></i>,
      innerWidth: "mobile",
      path: "/store",
    },
    {
      name: "Tải video",
      icon: <i className="fa-regular fa-square-plus text-2xl"></i>,
      innerWidth: "detop",
      path: "/addpage",
    },
    {
      icon: (
        <img
          src={`https://res.cloudinary.com/dcvu7e7ps/image/upload/v1744818763/Button_Shape_s8fj3r.svg`}
        />
      ),
      path: "/addpage",
      innerWidth: "mobile",
    },
    {
      name: "Mailbox",
      icon: <i className="fa-regular fa-comment  text-2xl"></i>,
      path: "/mailbox",
      innerWidth: "all",
    },
    {
      name: "Profile",
      icon: <i className="fa-regular fa-user  text-2xl"></i>,
      innerWidth: "all",
      path: "/profile",
    },
  ];
  return (
    <div>
      <footer className="bg-black w-full sm:h-screen text-white sm:sticky sm:flex-col sm:justify-start fixed bottom-0 left-0 h-16 flex justify-around items-center z-20">
        <div className="hidden sm:block sm:m-0 sm:p-0">
          {" "}
          <Image
            isBlurred
            alt="HeroUI Album Cover"
            className="m-5 mx-auto "
            src={logo}
            width={40}
          />
        </div>
        <nav>
          <ul className="sm:flex-col sm:justify-center  flex justify-evenly items-center gap-4 sm:gap-2 space-x-9 sm:space-x-0 sm:px-5">
            {menu
              .filter(
                (item: any) =>
                  item.innerWidth === "all" ||
                  item.innerWidth === (isMobile ? "mobile" : "detop")
              )
              .map((item: any, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? " text-white sm:text-red-500 flex flex-col items-center hover:bg-opacity-10 rounded-lg sm:px-3  sm:py-1 hover:bg-white"
                      : "text-white/50 flex flex-col items-center hover:bg-white hover:bg-opacity-10 rounded-lg sm:px-3  sm:py-2"
                  }
                >
                  {item.icon}
                  <span className="text-xs sm:hidden"> {item.name}</span>
                </NavLink>
              ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Navbar;
