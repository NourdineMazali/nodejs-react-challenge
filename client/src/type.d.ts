interface IColour {
	_id: string;
	name: string;
	createdAt?: string;
	updatedAt?: string;
}

interface ItemProps {
	coulour: IColour;
}

type ApiDataType = {
	message?: string;
	status: string;
	coulour: IColour;
	coulours: IColour[];
};