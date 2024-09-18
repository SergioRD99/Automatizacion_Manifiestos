import axios from "axios";

  export const getData = async () => {
    try {
        const response = await axios.get("https://localhost:44300/api/TestAngular/GetUsersList")
        return response.data; 
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};