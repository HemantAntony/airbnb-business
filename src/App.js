import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

function App() {
  const cardElements = cardData.map((cardInfo) => {
    return (
      <Card
        key={cardInfo.id}
        img={cardInfo.coverImg}
        rating={cardInfo.stats.rating}
        reviewCount={cardInfo.stats.reviewCount}
        location={cardInfo.location}
        title={cardInfo.title}
        price={cardInfo.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cardElements}
      </section>
    </div>
  );
}

export default App;
