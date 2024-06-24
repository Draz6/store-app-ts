import axios from "axios";

const URL: string = "https://667256d76ca902ae11afe79a.mockapi.io/api/v1/store";

const getData = async (): Promise<any> => {
  try {
    const response = await axios(URL);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};



const addItem = async (id: number): Promise<any> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export { getData , addItem};