import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-4xl font-extrabold text-center text-purple-300 mb-8 drop-shadow-lg">Bilguntugs </h1>

      {/* Button positioned at the top right */}
      <button 
        onClick={toggleView} 
        className="absolute top-6 right-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
      >
        {isGridView ? "Switch to List View" : "Switch to Grid View"}
      </button>

      <div className={`mt-12 ${isGridView ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" : "flex flex-col gap-8"}`}>
        {data?.touristAttractions?.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg hover:shadow-xl transition duration-300 border-4 border-black">
            <h2 className="text-xl font-bold">{item?.name}</h2>
            <p className="text-black mt-2">{item?.description}</p>
            <p className="opacity-75 text-center">{item?.address?.country}</p>

            <img
              src={item?.images}
              alt={item?.name}
              className="h-64 w-full object-cover"
            />
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
