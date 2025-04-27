import { whatapp } from "@/assets/PageImage";
import { Button } from "@heroui/button";
import { Carousel } from "@mantine/carousel";

import { AnimatePresence, motion } from "framer-motion";
const Share = ({
  showShare,
  setShowShare,
}: {
  showShare: boolean;
  setShowShare: (value: boolean) => void;
}) => {
  return (
    <div>
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
                    <p className="mt-1 text-black/70 text-center">WhatsApp</p>
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
  );
};

export default Share;
