import "./App.css";
import CalcKeys from "./components/CalcKeys";
import CalcScreen from "./components/CalcScreen";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <div className="max-w-sm w-full h-screen mx-auto bg-gray-50 flex flex-col gap-y-2 justify-between">
      <StatusBar />
      <CalcScreen />
      <CalcKeys />
    </div>
  );
}

export default App;
