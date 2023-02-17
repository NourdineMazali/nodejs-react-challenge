import { useState } from "react";
import { Button, ButtonGroup, Form, Modal } from "react-bootstrap";
import { deleteColour } from "../../api/api";
type ColourProps = {
	_id: string;
	name: string;
};

const Colour = ({ _id, name }: ColourProps) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	const removeColour = async () => {
		deleteColour(_id).then(() => window.location.reload());
	};

	const colour: IColour = {
		_id: _id,
		name: name,
	};

	return (
		<>
			<tr>
				<td>{_id}</td>
				<td>{name}</td>
				<td>
					<ButtonGroup aria-label="Basic example">
						<Button variant="danger" onClick={removeColour}>
							Delete
						</Button>
					</ButtonGroup>
				</td>
			</tr>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId={`name_${_id}`}>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								defaultValue={name}
								onChange={(event) => {
									colour.name = event.target.value;
								}}
							/>
						</Form.Group>
											</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Colour;