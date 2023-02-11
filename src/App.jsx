import RemainingFunds from "./components/RemainingFunds";
import "./App.css";
import UpcomingBills from "./components/UpcomingBills";
import Cards from "./components/Cards";
import PayCard from "./components/PayCard";
import CardInfo from "./components/CardInfo";

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

  const cardInfo = {
    heading: "Mastercard Gold",
    cashAvailable: "1000",
    creditLimit: "10000",
    debt: "1000",
    cardNumber: "5050",
    expiryDate: "2/33",
  };

  return (
    <div className="App ">
      <RemainingFunds data={one} />
      <UpcomingBills bills={bills} />
      <Cards />
      <PayCard payCard={payCard} />
      <CardInfo cardInfo={cardInfo} />
    </div>
  );
}

export default App;
