import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <h1>this is our home page</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
