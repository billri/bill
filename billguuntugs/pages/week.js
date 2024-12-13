import { useState } from "react";

export default function week(){
    const [grid, setGrid]=useState(false);
const data = [
    {
        id: 1,
        title:"TEST1",
        description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    }, //0
    {
        id: 2,
        title:"TEST2",
        description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },//1
     {
        id: 3,
        title:"TEST3",
        description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },//3
    {
        id: 4,
        title:"TEST4",
        description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        id: 5,
        title:"TEST5",
        description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
];
return(
    <div className="p-6 max-w-4xl mx-auto ">
        <div className="felx items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Нийтлэлүүд</h1>
         <button 
         onClick={()=> setGrid(!grid)}
         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
            {grid ? "Жагсаалт харах руу шилжих " : "Grid view руу шилжих"}
         </button>
        </div>
        <div className={
            grid == true ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "space-y-4"
        }>
            {data.map((items, index) =>(
        
                <div
                key={items.id}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-4"
                >
                    <h2 className="text-xl font-semibold mb-2">{items.title}</h2>
                    <p className="tetx-gray-600">{items.description}</p>
            </div>

            
        ))}
    {data.map((data) => {
        return <div>bilguuntugs</div>
    
    })}
        </div>
    </div>
);
}