import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000/api/v1";
const axiosInstance = axios.create({
    withCredentials: true, // this allows the cookies to be sent with the request
  });
export const getColours = async (): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const colours: AxiosResponse<ApiDataType> = await axiosInstance.get(
			`${baseUrl}/colours`
		);
		return colours;
	} catch (error) {
		throw error;
	}
};

export const addColour = async (
	data: IColour
): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const colour: Omit<IColour, "_id"> = {
			name: data.name,
		};

		const saveColour: AxiosResponse<ApiDataType> = await axiosInstance.post(
			`${baseUrl}/colours`,
			colour
		);
		return saveColour;
	} catch (error) {
		throw error;
	}
};


export const deleteColour = async (
	id: string
): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const deleteColour: AxiosResponse<ApiDataType> = await axiosInstance.delete(
			`${baseUrl}/colours/${id}`
		);
		return deleteColour;
	} catch (error) {
		throw error;
	}
};
