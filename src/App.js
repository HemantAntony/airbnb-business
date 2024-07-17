import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

function App() {
  const cardElements = cardData.map((cardInfo) => {
    return (
      <Card
        key={cardInfo.id}
        {...cardInfo}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">
        {cardElements}
      </section>
    </div>
  );
}

export default App;
