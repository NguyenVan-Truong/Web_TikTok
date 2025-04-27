import { useState } from "react";

const useWheelscroll = ({ carouselRef, time }: any) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const handleWheel = async (event: WheelEvent) => {
    if (isScrolling) return;
    setIsScrolling(true);
    if (event.deltaY > 0) {
      await carouselRef.current?.scrollNext();
    } else {
      await carouselRef.current?.scrollPrev();
    }
    setTimeout(() => {
      setIsScrolling(false);
    }, time);
  };
  return { handleWheel };
};

export default useWheelscroll;
