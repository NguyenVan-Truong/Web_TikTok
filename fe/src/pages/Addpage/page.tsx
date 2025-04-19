import { Ellipse, Ellipse2, plus } from "@/assets/PageImage";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const navidgate = useNavigate();
  const images = [
    <i className="fa-solid fa-text-size text-xl py-2"></i>,
    <i className="fa-solid fa-share text-xl py-2"></i>,
    <i className="fa-regular fa-palette text-2xl py-2"></i>,
    <i className="fa-solid fa-stars text-2xl py-2"></i>,
  ];
  return (
    <div className="bg-black">
      {" "}
      {/* <div className=" flex justify-between items-center p-5 ">
        <button className="text-gray-500" onClick={() => navidgate(-1)}>
          <i className="fa-solid fa-chevron-left text-lg"></i>
        </button>
        <button className="text-gray-500 flex gap-2 items-center bg-slate-200 rounded-full px-4 py-1">
          <i className="fa-solid fa-rotate text-lg"></i>
          <p className="text-base font-semibold">Thay nhạc</p>
        </button>
        <i className="fa-regular fa-gear text-xl"></i>
      </div> */}
      <div className="relative w-full h-full  overflow-y-auto bg-black">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dcvu7e7ps/video/upload/v1744799772/Download_vjv8fv.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col justify-start px-4 pb-4">
          {" "}
          <div className=" flex justify-between items-center px-5  pt-5">
            <button className="" onClick={() => navidgate(-1)}>
              <i className="fa-solid fa-chevron-left text-lg"></i>
            </button>
            <button className=" flex gap-2 items-center bg-white  opacity-50 text-black rounded-full px-4 py-1">
              <i className="fa-solid fa-rotate text-lg"></i>
              <p className="text-base font-semibold">Thay nhạc</p>
            </button>
            <i className="fa-regular fa-gear text-2xl"></i>
          </div>
          <div className="flex flex-col items-end px-5 ">
            {images.map((item, i) => item)}
          </div>
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
            {" "}
            <Link href="/caption" className="py-4">
              <Button className="bg-red-500 text-white w-80   rounded-xl shadow-lg flex items-center justify-center gap-2 font-semibold text-xl">
                {" "}
                Tiếp
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
