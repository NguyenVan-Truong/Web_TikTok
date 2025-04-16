import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    // <DefaultLayout>
    //   <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //     <div className="inline-block max-w-lg text-center justify-center">
    //       <h1 className={title()}>About</h1>
    //     </div>
    //   </section>
    // </DefaultLayout>
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dcvu7e7ps/video/upload/v1744799772/Download_vjv8fv.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col justify-between p-4">
          <div className="flex justify-center mt-4 space-x-6 text-sm font-semibold">
            <button className="text-white border-b-2 border-white">
              Following
            </button>
            <button className="text-gray-300">For You</button>
          </div>

          <div className="flex justify-between items-end">
            <div className="mb-4">
              <p className="font-semibold">@karennne • 1-28</p>
              <p>#avicii #wflove</p>
              <p className="text-sm">🎵 Avicii - Waiting For Love</p>
            </div>

            <div className="flex flex-col items-center gap-4 mb-16 mr-4">
              <img
                src="/avatar.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="flex flex-col items-center">
                <button>🤍</button>
                <p>4445</p>
              </div>
              <div className="flex flex-col items-center">
                <button>💬</button>
                <p>64</p>
              </div>
              <button>📤</button>
              <button className="w-10 h-10 mt-4 rounded-full bg-white animate-spin">
                🎵
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-16 bg-black text-white flex justify-around items-center z-50">
        <div className="flex flex-col items-center">
          <span>🏠</span>
          <span className="text-xs">Home</span>
        </div>

        <div className="flex flex-col items-center">
          <span>🔍</span>
          <span className="text-xs">Discover</span>
        </div>

        <div className="relative w-12 h-8 rounded bg-white flex items-center justify-center">
          <div className="absolute left-0 w-1/2 h-full bg-[#00f2ea] rounded-l"></div>
          <div className="absolute right-0 w-1/2 h-full bg-[#ff0050] rounded-r"></div>
          <span className="z-10 text-black font-bold text-xl">+</span>
        </div>

        <div className="flex flex-col items-center">
          <span>💬</span>
          <span className="text-xs">Inbox</span>
        </div>

        <div className="flex flex-col items-center">
          <span>👤</span>
          <span className="text-xs">Me</span>
        </div>
      </div>
    </>
  );
}
