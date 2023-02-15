import './App.css';
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNav from "./components/CustomNav";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddColour from "./components/AddColour";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
			<CustomNav />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new-colour" element={<AddColour />} />
				</Routes>
			</Container>
		</BrowserRouter>
    </div>
  );
}

export default App;
