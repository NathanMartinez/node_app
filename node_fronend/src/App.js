import { Container } from "react-bootstrap";
import SignupForm from "./components/SignupForm";
import Navigation from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <SignupForm />
      </Container>
    </div>
  );
}

export default App;
