import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getColours } from "../../api/api";
import Colour from "./Colour";

const Colours = () => {
	const [colours, setColours] = useState<IColour[]>([]);

	const fetchColours = async (): Promise<void> => {
		getColours()
			.then(({ data: { colours } }: IColour[] | any) => setColours(colours))
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchColours();
	}, []);

	return (
		<>
			<br></br>
			<Table>
				<thead>
					<tr>
						<th>Colour ID</th>
						<th>Name</th>
                        <th></th>
					</tr>
				</thead>
				<tbody>
					{colours.map((colour) => {
						return (
							<Colour
								_id={colour._id}
								name={colour.name}
							/>
						);
					})}
				</tbody>
			</Table>
		</>
	);
};

export default Colours;