import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About'
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
