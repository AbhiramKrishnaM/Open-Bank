import RemainingFunds from "./components/RemainingFunds";
import "./App.css";
import UpcomingBills from "./components/UpcomingBills";
import Cards from "./components/Cards";
import PayCard from "./components/PayCard";

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

  const payCard = { piggyBank: 39000, payment: 10000 };

  return (
    <div className="App ">
      <RemainingFunds data={one} />
      <UpcomingBills bills={bills} />
      <Cards />
      <PayCard payCard={payCard} />
    </div>
  );
}

export default App;
