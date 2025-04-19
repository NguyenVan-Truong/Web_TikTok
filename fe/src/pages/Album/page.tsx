import { Link } from "@heroui/link";
import React from "react";
import { useNavigate } from "react-router-dom";

const Album = () => {
  const images = [
    "https://picsum.photos/id/237/137/182",
    "https://picsum.photos/id/1/137/182",
    "https://picsum.photos/id/227/137/182",
    "https://picsum.photos/id/237/137/182",
    "https://picsum.photos/id/247/137/182",
    "https://picsum.photos/id/257/137/182",
    "https://picsum.photos/id/267/137/182",
    "https://picsum.photos/id/267/137/182",
    "https://picsum.photos/id/277/137/182",
    "https://picsum.photos/id/287/137/182",
  ];
  const navigation = useNavigate();
  return (
    <div className="">
      <div className=" flex justify-between items-center p-5 ">
        <button onClick={() => navigation(-1)} className="text-gray-500">
          <i className="fa-solid fa-chevron-left text-lg"></i>
        </button>
        <i className="fa-regular fa-share text-xl"></i>
      </div>
      <div className="p-4 border-b">
        <div className="flex items-start gap-3">
          <img
            src="https://picsum.photos/id/237/100/100"
            alt="Sound Thumbnail"
            className="w-40 h-40 rounded"
          />
          <div>
            <h2 className="text-2xl font-semibold">The Round</h2>
            <p className="text-base text-gray-500 mt-3">Roddy Roundicch</p>
            <p className="text-base text-gray-500">1.7M videos</p>{" "}
            <button className="mt-8 px-5 py-1 border rounded text-base font-semibold  text-gray-700 hover:bg-gray-100">
              <i className="fa-regular fa-bookmark"></i> Add to Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Grid image */}
      <div className="grid grid-cols-3 gap-0">
        {images.map((img, index) => (
          <Link href="#" key={index} className="relative group">
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>

      {/* Use this sound button */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2">
        <button className="bg-red-500 text-white px-6 py-4 rounded-full shadow-lg flex items-center gap-2 font-semibold text-xl">
          <i className="fa-solid fa-video"></i>
          Use this sound
        </button>
      </div>
    </div>
  );
};

export default Album;
