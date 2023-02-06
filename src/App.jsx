import RemainingFunds from "./components/RemainingFunds";
import "./App.css";

function App() {
  const one = {
    amount: "200",
    days: "15",
  };

  return (
    <div className="App">
      <RemainingFunds data={one} />
    </div>
  );
}

export default App;
