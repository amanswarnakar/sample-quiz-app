import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
