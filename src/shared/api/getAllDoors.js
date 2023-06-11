import axios from "axios";

const Instance = axios.create({
    baseURL: "https://doors-service.onrender.com/api/metal-doors",
});

// export const getAllDoors = async () => {
//     const { data } = await Instance.get("/doors");
//     return data;
// };

export const getAllDoors = async () => {
    const { data } = await axios.get("https://doors-service.onrender.com/api/metal-doors/doors");
    return data;
};
