import Container from "react-bootstrap/Container";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import Body from "./Components/Body";

export default function App() {

  return (
    <Container fluid className="App">
      <Header />
      <Body sidebar>
        <Posts/>
      </Body>
    </Container>
  );
}