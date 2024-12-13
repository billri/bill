import React, { useState } from "react";

const userData = [
  { id: 1, name: "Blitz", email: "Blitz@example.com" },
  { id: 1, name: "Techno4k", email: "Blitz@example.com" },
  { id: 1, name: "senzu", email: "Blitz@example.com" },
  { id: 1, name: "Senzu", email: "Blitz@example.com" }, 
  { id: 1, name: "910", email: "Blitz@example.com" }, 
  { id: 1, name: "Maraa", email: "Blitz@example.com" }, 
];

export default function Users() {
  const [search, setSearch] = useState("");
  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log("search", search);
  console.log("filtered", filteredUsers);

  return (
    <div className="p-6 max-w-4xl-auto bg-gray-300">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Хэрэглэгчийн жагсаалт
        </h1>
        <input
          type="search"
          onChange={(test) => setSearch(test.target.value)}
          placeholder="Хэрэглэгчийн нэрээр хайна уу.."
          className="border-2 border-black w-full p-2 rounded"
        />
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4">
          {filteredUsers.length < 0 ? ( 
            <div className="font-bold text-center text-black">No results found</div>
          ) : (
            filteredUsers.map((user) => { 
              return (
                <div
                  key={user.id}
                  className="font-bold font-mono mb-8 p-4 h-12 flex items-center border-2 border-black/50 rounded-lg shadow-xl text-black"
                >
                  {user.id} {user.name} {user.email}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
