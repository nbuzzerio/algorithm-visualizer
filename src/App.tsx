import { useTheme } from "./components/ThemeContext/ThemeContext";

function App() {
  const theme = useTheme();

  return (
    <div
      className={`theme ${theme ? "bg-gray-700" : "bg-gray-800"} flex min-h-screen flex-col items-center`}
    >
      <h1 className="text text-9xl font-extrabold uppercase text-red-950 underline">
        Algorithm Visualizer
      </h1>
    </div>
  );
}

export default App;
