import { Container, Nav, Navbar } from "react-bootstrap";
import { delete_cookie } from "../utils/cookies";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";
import React, { useContext } from "react";

const CustomNav = () => {
    const { userContext, setUserContext } = useContext(UserContext);

    const navigate = useNavigate();

    const logout = () => {
        delete_cookie("user_id");
        delete_cookie("token");
        sessionStorage.clear();
        setUserContext(null);
        navigate("/login");
      };

	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand href="/">
					Annalise.ai Challenge
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						{userContext && <Nav.Link href="/new-colour">Add Colour</Nav.Link> }
                        {!userContext && <Nav.Link  href="/login">Login</Nav.Link>}
                        {!userContext && <Nav.Link href="/register">Register</Nav.Link>}
                        {userContext &&<Nav.Link onClick={() => {
                            logout();
                        }}>Logout</Nav.Link> }
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default CustomNav;