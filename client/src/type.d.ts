interface IColour {
	_id: string;
	name: string;
	createdAt?: string;
	updatedAt?: string;
}

interface IUser {
    username: string,
    email?: string,
    password: string,
}

type ApiDataType = {
	message?: string;
	status: string;
	coulour: IColour;
	coulours: IColour[];
};

interface IloginCred {
    username: string;
    password: string;
  }