import { useState } from "react";
import { useTheme } from "./components/ThemeContext/ThemeContext";
import Arrays from "./components/Arrays";

function App() {
  const theme = useTheme();

  const [inputArr, setInputArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div
      className={`theme ${theme ? "bg-gray-700" : "bg-gray-800"} flex min-h-screen flex-col items-center`}
    >
      <h1 className="text py-10 text-7xl font-extrabold uppercase text-red-950 underline 2xl:text-9xl">
        Algorithm Visualizer
      </h1>
      <Arrays array={inputArr} />
      <button onClick={() => setInputArr([9, 8, 7, 6, 5, 4, 3, 2, 1])}></button>
    </div>
  );
}

export default App;
