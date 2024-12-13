import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center p-10">
      <div className="bg-slate-300 w-[650px] h-[350px] flex border p-6">
        <Image
          src="/h.jpg"
          height={200}
          width={200}
          className="m-4"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-4xl text-white mt-5 font-bold">bilguuntugs</p>
          </div>
          <div>
            <p className="text-2xl mt-2 text-white">altanzags</p>
          </div>
          <div className="mt-7">
            <div className="flex">
              <p className="text-1xl text-white">94000000</p>
            </div>
            <div className="flex">
              <p className="text-1xl text-white">kakekaje85@gmail.com</p>
            </div>
            <div className="flex">
              <p className="text-1xl text-white">Nest Education It School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}