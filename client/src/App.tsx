import './App.css';
import React from "react";
import { useContext, useEffect} from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNav from "./components/CustomNav";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddColour from "./components/colour/AddColour";
import Login from "./components/auth/signin";
import Register from "./components/auth/signup";
import { UserContext } from "./components/Context";
import { getCookie } from "./utils/cookies";

function App() {

  const { userContext, setUserContext } = useContext(UserContext);

  useEffect(() => {
	if (!userContext) {
	  setUserContext(getCookie("user_id"));
	}
  }, [userContext]);
  return (
    <div className="App">
      <BrowserRouter>
			<CustomNav />
			<Container className = "col-md-3">
			<br></br>
				<Routes>
					<Route path="/" element={ userContext ? <Home />  : <Login/> } />
					<Route path="/new-colour" element={<AddColour />} />
					<Route path="/login" element={<Login />} />
					<Route path="/Register" element={<Register />} />
				</Routes>
			</Container>
		</BrowserRouter>
    </div>
  );
}

export default App;
