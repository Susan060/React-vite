import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "lucide-react";

const App = () => {
  const [index, setIndex] = useState(1); // current page
  const [userData, setUserData] = useState([]); // fetched data
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await axios.get(
          `https://picsum.photos/v2/list?page=${index}&limit=30`
        );
        setUserData(result.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data. Please try again.");
        setUserData([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [index]);

  return (
    <div className="bg-black min-h-screen text-white p-4">
      {/* Page number */}
      <h1 className="fixed top-4 left-4 bg-red-500 px-4 py-2 text-3xl rounded">
        Page: {index}
      </h1>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center my-10">
          <Loader className="animate-spin h-10 w-10 text-white" />
          <span className="ml-2 text-xl">Loading...</span>
        </div>
      )}

      {/* Error */}
      {error && <p className="text-red-500 text-lg my-4">{error}</p>}

      {/* Images */}
      {!loading && !error && (
        <div className="flex flex-wrap gap-4 p-2">
          {userData.length > 0 ? (
            userData.map((e) => (
              <div key={e.id}>
                <a href={e.url} target="_blank" rel="noopener noreferrer">
                  <div className="h-40 w-44 bg-white rounded-xl overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={e.download_url}
                      alt={e.author}
                    />
                  </div>
                  <h1 className="font-bold text-lg mt-1">{e.author}</h1>
                </a>
              </div>
            ))
          ) : (
            <p className="text-white text-lg">No User Available</p>
          )}
        </div>
      )}

      {/* Prev / Next Buttons */}
      <div className="flex items-center justify-between p-4 mt-4">
        <button
          onClick={() => setIndex((prev) => Math.max(prev - 1, 1))}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Prev
        </button>
        <button
          onClick={() => setIndex((prev) => prev + 1)}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
