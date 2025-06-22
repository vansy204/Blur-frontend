import axios from "axios";

const BASE_URL  = "https://35fe-2405-4802-9170-80f0-2457-8c6d-10fe-855d.ngrok-free.app/api/identity/users";

const config = (token) => ({
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
export const registerUser = async (data) => {
    try{
        const response = await axios.post(`${BASE_URL}/registration`, data, config());
        if (response.data?.code !== 1000) {
            throw new Error(response.data?.message);
        }
        return response.data?.result;
    }catch (error) {
        console.log("Error: ", error);
        throw error;
    }
}