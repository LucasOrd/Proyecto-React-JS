import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomeView from "./components/HomeView/HomeView";
import Container from "./components/Container/Container";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <HomeView saludo="HOla chau" texto="Lorem" />
      </Container>
      <ItemCount />
      <Footer />
    </div>
  );
}

export default App;
