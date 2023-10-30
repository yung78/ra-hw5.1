import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card 
        title={'Card title'}
        text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
      >
        <img src="./img.jpg" className="card-img-top" alt="card_img"/>
      </Card>
      <Card 
        title={'Special title treatment'}
        text={'With supporting text below as a natural lead-in to additional content.'}
        />
    </div>
  );
}

export default App;
