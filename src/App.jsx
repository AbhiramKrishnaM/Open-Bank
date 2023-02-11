import RemainingFunds from "./components/RemainingFunds";
import "./App.css";
import UpcomingBills from "./components/UpcomingBills";
import Cards from "./components/Cards";

function App() {
  const one = {
    amount: "200",
    days: "15",
  };
  const bills = {
    icon: "simple-icons:mailchimp",
    heading: "MainChimp",
    price: "300",
    bgcolor: "rgb(226 232 240)",
  };

  return (
    <div className="App ">
      <RemainingFunds data={one} />
      <UpcomingBills bills={bills} />
      <Cards />
    </div>
  );
}

export default App;
