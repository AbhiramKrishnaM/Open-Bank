import "./App.css";
import TopNavbar from "./components/common/navbar/Top"; // Top Navbar

import RemainingFunds from "./components/pages /RemainingFunds";
import UpcomingBills from "./components/pages /UpcomingBills";
import Cards from "./components/pages /Cards";
import PayCard from "./components/pages /PayCard";
import CardInfo from "./components/pages /CardInfo";

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
    <div className="App">
      <TopNavbar />

      {/* <RemainingFunds data={one} /> */}
      {/* <UpcomingBills bills={bills} /> */}
      {/* <Cards /> */}
      {/* <PayCard payCard={payCard} /> */}
      {/* <CardInfo cardInfo={cardInfo} /> */}
    </div>
  );
}

export default App;
