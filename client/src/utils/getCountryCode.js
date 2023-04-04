import axios from "axios";

export const getCountryCode = async () => {
    try {
        const { data } = await axios.get("https://ipapi.co/json/");
        return data.country;
    } catch (error) {
        console.error("Error fetching country code:", error);
        return null;
    }
};
