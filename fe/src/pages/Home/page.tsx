import DefaultLayout from "@/layouts/default";
import { Avatar } from "@heroui/avatar";
import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { useHref } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import { Ellipse, Ellipse2, plus, whatapp } from "@/assets/PageImage";
import { Button } from "@heroui/button";
const HomePage = () => {
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [wistlist, setWistlist] = useState(false);

  return (
    <DefaultLayout>
      <div className=" ">
        <Carousel
          orientation="vertical"
          height={880}
          withControls={false}
          draggable={showComment || showShare ? false : true}
        >
          <Carousel.Slide>
            {" "}
            <div className="relative w-full h-full  overflow-y-auto">
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
                      <button
                        className="text-4xl"
                        onClick={() => setShowShare(true)}
                      >
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
          </Carousel.Slide>
          <Carousel.Slide>
            {" "}
            <div className="relative w-full h-screen  overflow-y-auto">
              <video
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/dcvu7e7ps/video/upload/v1744825474/Download_1_ake8rr.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="absolute bottom-0 left-0 w-full h-full text-white flex flex-col justify-end pl-4 pb-4">
                <div className="flex justify-between items-end">
                  <div className="mb-14">
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

                  <div className="flex flex-col items-center gap-4 mb-16 mr-4">
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
                      <button className="text-4xl">
                        <i className="fa-solid fa-share"></i>
                      </button>
                      <p>Share</p>
                    </div>
                    <button className="w-12 h-12 mt-4 rounded-full bg-white animate-spin">
                      🎵
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            {" "}
            <div className="relative w-full h-screen  overflow-y-auto">
              <video
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/dcvu7e7ps/video/upload/v1744799772/Download_vjv8fv.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="absolute bottom-0 left-0 w-full h-full text-white flex flex-col justify-end pl-4 pb-4">
                <div className="flex justify-between items-end">
                  <div className="mb-14">
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

                  <div className="flex flex-col items-center gap-4 mb-16 mr-4">
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
                      <button className="text-4xl">
                        <i className="fa-solid fa-share"></i>
                      </button>
                      <p>Share</p>
                    </div>
                    <button className="w-12 h-12 mt-4 rounded-full bg-white animate-spin">
                      🎵
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none z-50">
        <div className="pointer-events-auto p-4">
          {" "}
          <div className="flex justify-center mt-4 space-x-6 text-md font-bold">
            {" "}
            <Link href={"fllowing"} className="text-white  border-white">
              Following
            </Link>
            <Link href={"ForYou"} className="text-gray-300">
              For You
            </Link>
          </div>
        </div>
        <div className="pointer-events-auto z-50">
          <AnimatePresence>
            {showComment && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.3 }}
                className="w-full h-[700px] bg-white rounded-t-2xl shadow-xl p-4  "
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold text-lg text-gray-500 tracking-tight">
                    Tìm kiếm:{" "}
                    <Link href="#" className="text-blue-500 ">
                      <span className="">Trường hay ho</span>
                      <i className="fa-solid fa-magnifying-glass text-xs pb-2"></i>
                    </Link>
                  </h2>
                  <button
                    onClick={() => setShowComment(false)}
                    className="text-gray-500 hover:text-black"
                  >
                    ❌
                  </button>
                </div>
                <h2 className="text-center font-bold text-xl my-4">
                  322 bình luận
                </h2>
                <div className="space-y-2 max-h-48 overflow-y-auto mb-5">
                  <div className="flex items-start gap-3 w-full">
                    <Avatar
                      isBordered
                      color="default"
                      className="w-14 h-14 text-large"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />

                    <div className="w-[70%]">
                      <h4 className="text-black/70 text-base font-semibold">
                        Người A
                      </h4>
                      <p className="text-black/80 text-base font-semibold mt-1 w-auto">
                        Coi hoài không chán. Coi hoài không chán. Coi hoài không
                        chán. Coi hoài không chán.
                      </p>
                      <div className="flex items-center gap-2  justify-between mt-1">
                        <div className="flex items-center gap-2 ">
                          <p className="text-gray-500 text-sm ">1 giờ </p>
                          <p>Trả lời</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                          <p className="text-gray-500 text-sm  ">
                            <i
                              className={` fa-heart pr-1 ${true ? "fa-solid text-red-500" : "fa-regular"}`}
                            ></i>
                            <span>1</span>
                          </p>
                          <p>
                            <i
                              className={` fa-thumbs-down fa-flip-horizontal ${false ? "fa-solid text-blue-500" : "fa-light"} `}
                            ></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto mb-5">
                  <div className="flex items-start gap-3 w-full">
                    <Avatar
                      isBordered
                      color="default"
                      className="w-14 h-14 text-large"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />

                    <div className="w-[70%]">
                      <h4 className="text-black/70 text-base font-semibold">
                        Người A
                      </h4>
                      <p className="text-black/80 text-base font-semibold mt-1 w-auto">
                        Coi hoài không chán. Coi hoài không chán. Coi hoài không
                        chán. Coi hoài không chán.
                      </p>
                      <div className="flex items-center gap-2  justify-between mt-1">
                        <div className="flex items-center gap-2 ">
                          <p className="text-gray-500 text-sm ">1 giờ </p>
                          <p>Trả lời</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                          <p className="text-gray-500 text-sm  ">
                            <i
                              className={` fa-heart pr-1 ${true ? "fa-solid text-red-500" : "fa-regular"}`}
                            ></i>
                            <span>1</span>
                          </p>
                          <p>
                            <i
                              className={` fa-thumbs-down fa-flip-horizontal ${false ? "fa-solid text-blue-500" : "fa-light"} `}
                            ></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto mb-5">
                  <div className="flex items-start gap-3 w-full">
                    <Avatar
                      isBordered
                      color="default"
                      className="w-14 h-14 text-large"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />

                    <div className="w-[70%]">
                      <h4 className="text-black/70 text-base font-semibold">
                        Người c
                      </h4>
                      <p className="text-black/80 text-base font-semibold mt-1 w-auto">
                        hay quá đi. hay quá đi. hay quá đi. hay quá đi. hay quá
                        đi. hay quá đi.
                      </p>
                      <div className="flex items-center gap-2  justify-between mt-1">
                        <div className="flex items-center gap-2 ">
                          <p className="text-gray-500 text-sm ">1 giờ </p>
                          <p>Trả lời</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                          <p className="text-gray-500 text-sm  ">
                            <i
                              className={` fa-heart pr-1 ${false ? "fa-solid text-red-500" : "fa-regular"}`}
                            ></i>
                            <span>1</span>
                          </p>
                          <p>
                            <i
                              className={` fa-thumbs-down fa-flip-horizontal ${true ? "fa-solid text-blue-500" : "fa-light"} `}
                            ></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showShare && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.3 }}
                className="w-full h-[350px] bg-gray-100 rounded-t-2xl shadow-xl pt-4 flex flex-col justify-between "
              >
                <div className="flex justify-center items-center mb-2 px-4">
                  <h2 className="font-semibold">Share to</h2>
                </div>

                <div className=" mb-5 px-4 mt-2">
                  {" "}
                  <Carousel
                    withControls={false}
                    height={100}
                    slideSize="16.333333%"
                    slideGap="xs"
                    align="start"
                    slidesToScroll={2}
                  >
                    {" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp
                        </p>
                      </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                  </Carousel>
                  <hr className="mt-1 mb-4" />
                  <Carousel
                    withControls={false}
                    height={100}
                    slideSize="16.333333%"
                    slideGap="xs"
                    align="start"
                    slidesToScroll={2}
                  >
                    {" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                    <Carousel.Slide>
                      <div className="flex flex-col ">
                        <button>
                          {" "}
                          <img src={whatapp} alt="" className="w-14 h-14" />
                        </button>
                        <p className="mt-1 text-black/70 text-center">
                          WhatsApp status
                        </p>
                      </div>
                    </Carousel.Slide>{" "}
                  </Carousel>
                </div>
                <div className="max-h-48 bg-white px-4 pb-4">
                  <Button
                    className="w-full bg-white h-[48px]"
                    onClick={() => setShowShare(!showShare)}
                  >
                    Cancel
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
