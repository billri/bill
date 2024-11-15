import Image from "next/image";
import localFont from "next/font/local";




export default function Home() {
  return (
    <div className="bg-white text-black flex justify-center justify-center item-centerh-screen ">
      <div className=" w-6 h-4/5 bg-#22d3ee border-current colums-2 flex-2 justify-center item-center">
      <div className="w-10 h-full bg-white ml-10" ></div>
      <div className="w-10 h-full bg-white ml-4" ></div>
      <div className="space-y-4 ml-10" ></div>
      
    <p className="text-2xl text-black flex mr-10">bilguuntugs</p>
    <p className="text-2xl text-black flex mr-10">bilguuntugs</p>
    <p className="text-2xl text-black flex mr-10">bilguuntugs</p>
    <p className="text-2xl text-black flex mr-10">bilguuntugs</p>
    <Image src="/h.jpg" width={100} height={100} />
    </div>
  </div>
  );
}
