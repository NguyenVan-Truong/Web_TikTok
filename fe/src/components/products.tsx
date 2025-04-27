import { Ellipse, Ellipse2, plus } from "@/assets/PageImage";
import { Avatar } from "@heroui/avatar";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useState } from "react";

import Marquee from "react-fast-marquee";
interface ProductsProps {
  setShowComment: (value: boolean) => void;
  setShowShare: (value: boolean) => void;
}

const Products = ({ setShowComment, setShowShare }: ProductsProps) => {
  const [wistlist, setWistlist] = useState(false);

  return (
    <div>
      {" "}
      <div className="relative w-full h-screen ">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dcvu7e7ps/video/upload/v1744799772/Download_vjv8fv.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute -bottom-0 left-0 w-full h-full text-white flex flex-col justify-end pl-4 pb-4">
          <div className="flex justify-between items-end">
            <div className="mb-10">
              <p className="font-semibold">@karennne • 1-28</p>
              <p className="w-80">
                <span className="text-gray-300">Truong hay ho </span>
                #avicii #wflove #wflove #wflove #wflove
              </p>
              <p className="w-48 flex flex-row text-gray-200 mt-3">
                <span className="mr-2">
                  <i className="fa-solid fa-music"></i>
                </span>{" "}
                <Marquee> Avicii - Waiting For Love</Marquee>
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 mb-10 mr-4">
              <div className="relative">
                <Avatar
                  isBordered
                  color="default"
                  className="w-14 h-14 text-large cursor-pointer"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div className="absolute -bottom-3 right-4 w-5 h-5 flex items-end justify-center cursor-pointer">
                  <Image alt="HeroUI hero Image" src={plus} width={300} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button
                  className="text-4xl"
                  onClick={() => setWistlist(!wistlist)}
                >
                  <i
                    className={`fa-solid fa-heart ${wistlist ? "text-red-500" : ""}`}
                  ></i>
                </button>
                <p>{(4445).toLocaleString()}</p>
              </div>
              <div
                className="flex flex-col items-center "
                onClick={() => setShowComment(true)}
              >
                <button className="text-4xl">
                  <i className="fa-solid fa-comment"></i>
                </button>
                <p>64</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="text-4xl" onClick={() => setShowShare(true)}>
                  <i className="fa-solid fa-share"></i>
                </button>
                <p>Share</p>
              </div>
              <Link href="album">
                <div className="relative animate-spin flex items-center justify-center">
                  {/* Ảnh nền */}
                  <img
                    src={Ellipse}
                    alt="Background"
                    className="w-full h-full object-cover rounded"
                  />

                  {/* Ảnh lồng bên trong (nằm ở góc dưới phải) */}
                  <img
                    src={Ellipse2}
                    alt="Overlay"
                    className="absolute  bg-center object-cover rounded-full border-2 border-white shadow"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
