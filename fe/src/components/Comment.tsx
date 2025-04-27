import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";

import { AnimatePresence, motion } from "framer-motion";
const Comment = ({
  showComment,
  setShowComment,
}: {
  showComment: boolean;
  setShowComment: (value: boolean) => void;
}) => {
  return (
    <div>
      {" "}
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
                    hay quá đi. hay quá đi. hay quá đi. hay quá đi. hay quá đi.
                    hay quá đi.
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
    </div>
  );
};

export default Comment;
