import { useState } from "react";

export default function week(){
    const [grid, setGrid]=useState(false);
    const [search, setSearch]= useState();
const data = [
    {
        id: 1,
        title:"Ganerdene",
        description:
        "age:16 hobby:math sex:male",

    }, //0
    {
        id: 2,
        title:"Temuugei",
        description:
        "age:16 hobby:math sex:male",

    },//1
     {
        id: 3,
        title:"Bill",
        description:
        "age:19 hobby:math sex:male",

    },//3
    {
        id: 4,
        title:"Temuuln",
        description:
        "age:16 hobby:math sex:male",

    },
    {
        id: 5,
        title:"Boldoo",
        description:
        "age:21 hobby:math sex:male",

    },
    {
        id: 5,
        title:"Boldoo",
        description:
        "age:21 hobby:math sex:male",

    },
    {
        id: 5,
        title:"Boldoo",
        description:
        "age:21 hobby:math sex:male",

    },
    {
        id: 5,
        title:"Boldoo",
        description:
        "age:21 hobby:math sex:male",

    },
    {
        id: 5,
        title:"Boldoo",
        description:
        "age:21 hobby:math sex:male",

    },
    {
        id: 5,
        title:"Boldoo",
        description:
        "age:21 hobby:math sex:male",

    },
    {
        id: 5,
        title:"Boldoo",
        description:
        "age:21 hobby:math sex:male",

    },
    {
        id: 5,
        title:"Boldoo",
        description:
        "age:21 hobby:math sex:male",

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
        <div className="w-full h-[100px] flex item-center flex-col gap-3 pt-3">
            <p className="font-bold text-xl text-white shadow-sm">11B</p>
            <input
            className="text-black border flex border-white shadow-white shadow-md pl-1 py-1 w-full shadow-lg"
            type="search"
            onClick={(e) => setSearch(e.target.value)}
            />
        </div>






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
  
        </div>
    </div>
);
}