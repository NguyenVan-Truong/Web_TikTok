import DefaultLayout from "@/layouts/default";
import { Carousel } from "@mantine/carousel";

import Products from "@/components/products";
import Share from "@/components/Share";
import useWheelscroll from "@/hook/usewheelscroll";
import { useEffect, useRef, useState } from "react";
import Comment from "./../../components/Comment";
import Menu from "./../../components/Menu";
const HomePage = () => {
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const carouselRef = useRef<any>(null);
  const { handleWheel } = useWheelscroll({ carouselRef, time: 800 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640 ? 880 : 944);
  console.log(isMobile);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640 ? 880 : 944);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <DefaultLayout>
      <div>
        <Carousel
          orientation="vertical"
          height={isMobile}
          withControls={false}
          draggable={showComment || showShare ? false : true}
          getEmblaApi={(embla) => {
            carouselRef.current = embla;
          }}
          onWheel={(e: any) => handleWheel(e)}
        >
          {" "}
          {[...Array(7)].map(() => (
            <Carousel.Slide>
              <Products
                setShowComment={setShowComment}
                setShowShare={setShowShare}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none z-50">
        <div className="pointer-events-auto p-4">
          {" "}
          <Menu />
        </div>
        <div className="pointer-events-auto z-50">
          <Comment showComment={showComment} setShowComment={setShowComment} />
          <Share showShare={showShare} setShowShare={setShowShare} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
