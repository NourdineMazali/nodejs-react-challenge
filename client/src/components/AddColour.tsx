import { Button, Form } from "react-bootstrap";
import { addColour } from "../api/api";
import { useNavigate } from "react-router-dom";

const AddColour = () => {
	const navigate = useNavigate();

	const colour: IColour = {
		_id: "",
		name: ""
	};

	const submitColour = async () => {
		addColour(colour).then(() => navigate("/"));
	};

	return (
		<>
			<br></br>
			<Form>
				<Form.Group className="mb-3" controlId="new_name">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						defaultValue={colour.name}
						onChange={(event) => {
							colour.name = event.target.value;
						}}
					/>
				</Form.Group>
			</Form>
			<Button variant="primary" onClick={submitColour}>
				Add Colour
			</Button>
		</>
	);
};

export default AddColour;