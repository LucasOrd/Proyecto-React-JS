import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomeView from "./components/HomeView/HomeView";
import Container from "./components/Container/Container";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={true} component={<ItemListContainer />} />
        <Route path="/detail" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

/* <Container>
        <HomeView saludo="Contenido Home View" texto="texto Home view" />
        <ItemListContainer />
      </Container>
      <ItemCount stock={50} initial={0} /> */
