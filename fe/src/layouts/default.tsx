import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main className="">{children}</main>
      <footer className="bg-black w-full text-white fixed bottom-0 left-0 h-16 flex justify-around items-center z-50">
        <nav>
          <ul className="flex justify-around items-center gap-4 space-x-9">
            <Link
              href="/"
              className="flex flex-col text-white hover:text-gray-200 "
            >
              <i className="fa-solid fa-house text-2xl"></i>
              <span className="text-xs">Trang chủ</span>
            </Link>
            <Link
              href="/discover"
              className="flex flex-col text-white hover:text-gray-200 text-xs"
            >
              <i className="fa-solid fa-magnifying-glass text-2xl"></i>
              <span className="text-xs">Tìm kiếm</span>
            </Link>
            <Link
              href="/add"
              className="flex flex-col text-white hover:text-gray-200 "
            >
              <img
                src="https://res.cloudinary.com/dcvu7e7ps/image/upload/v1744818763/Button_Shape_s8fj3r.svg"
                alt="https://res.cloudinary.com/dcvu7e7ps/image/upload/v1744818763/Button_Shape_s8fj3r.svg"
              />
            </Link>
            <Link
              href="/inbox"
              className="flex flex-col text-white hover:text-gray-200 text-xs"
            >
              {" "}
              <i className="fa-regular fa-comment  text-2xl"></i>
              <span className="text-xs">Hộp Thư</span>
            </Link>
            <Link
              href="/profile"
              className="flex flex-col text-white hover:text-gray-200 text-xs"
            >
              <i className="fa-regular fa-user  text-2xl"></i>
              <span className="text-xs">Hồ sơ</span>
            </Link>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
