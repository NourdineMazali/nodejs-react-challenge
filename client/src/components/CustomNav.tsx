import { Container, Nav, Navbar } from "react-bootstrap";

const CustomNav = () => {

	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand href="/">
					Annalise Challenge
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="/new-colour">Add Colour</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default CustomNav;