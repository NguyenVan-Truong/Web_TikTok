import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";
const Caption = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between h-screen ">
      <div>
        <div className=" flex justify-between items-center px-5  pt-5">
          <button className="" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-chevron-left text-lg"></i>
          </button>
          <button className="text-lg font-semibold">Huỷ</button>
        </div>
        <div className="flex flex-col  justify-center items-start px-2 py-5 border-b">
          <div className="w-full flex  items-start  gap-5">
            {" "}
            <textarea
              className="w-2/3 h-36 border-0 rounded-lg p-4  focus:outline-none focus:border-0 font-semibold"
              placeholder="Nhập chú thích của bạn..."
            ></textarea>
            <div className="w-1/3 relative">
              {" "}
              <img
                src="https://picsum.photos/id/287/137/182"
                alt=""
                className="rounded-lg"
              />
              <div className="absolute top-0 left-0 p-2 flex  flex-col cursor-pointer">
                <p className="font-semibold col-start-1">Xem</p>
              </div>{" "}
              <div className="absolute bottom-0 left-0 p-2 flex  justify-center items-center  bg-white opacity-55 w-full cursor-pointer">
                <p className="font-semibold ">Sửa ảnh bìa</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-2 mt-4 px-5 ">
            <button className="py-1 bg-gray-200 px-3 rounded-md">
              #Hashtg
            </button>
            <button className="py-1 bg-gray-200 px-3 rounded-md ">
              @Nhắc đến
            </button>
          </div>
        </div>
        <div className=" text-black p-4 rounded-lg space-y-4 w-full px-5 *:py-2  ">
          {/* Vị trí */}
          <div className="flex justify-between items-center mr-3 ">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-user-location"></i>
              <span className="font-medium ">Vị trí</span>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          {/* Tag vị trí */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-neutral-200 px-2 py-1 rounded text-sm">
              魚滿堂燒烤坊
            </span>
            <span className="bg-neutral-200 px-2 py-1 rounded text-sm">
              Góc Hà Nội
            </span>
            <span className="bg-neutral-200 px-2 py-1 rounded text-sm">
              Rạp Xiếc Trung Ương
            </span>
          </div>

          {/* Thêm liên kết */}
          <div className="flex justify-between items-center mr-3">
            <div className="flex items-center gap-2 ">
              <i className="fa-solid fa-plus"></i>
              <span className="font-medium">Thêm liên kết</span>
              <span className="w-2 h-2 bg-red-500 rounded-full ml-1"></span>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          {/* Ai cũng có thể xem */}
          <div className="flex justify-between items-center mr-3">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-globe"></i>
              <span className="font-medium">
                Ai cũng có thể xem bài đăng này
              </span>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          {/* Tuỳ chọn khác */}
          <div className="flex justify-between items-center mr-3">
            <div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-ellipsis"></i>
                <span className="font-medium">Tuỳ chọn khác</span>
              </div>
              <p className="text-xs text-gray-400 ml-6">
                Quản lý chất lượng tải lên
              </p>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          {/* Chia sẻ với */}
          <div className="flex justify-between items-center mr-3">
            <p className="mb-2 font-medium">Chia sẻ với</p>
            <div className="flex gap-4 text-xl">
              <i className="fa-brands fa-facebook-messenger"></i>
              <i className="fa-solid fa-link"></i>
              <i className="fa-regular fa-comment-dots"></i>
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Button className=" bg-red-500 text-white mx-auto  w-80 py-4 my-10 rounded-md shadow-lg font-semibold text-xl mt-4">
          Đăng
        </Button>
      </div>
    </div>
  );
};

export default Caption;
