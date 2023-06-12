import axios from "axios";

const Instance = axios.create({
    baseURL: "https://doors-service.onrender.com/api/metal-doors",
});

export const getAllDoors = () => {
    return Instance.get("/doors");
};

// export const getAllDoors = () => {
//     axios.get("https://doors-service.onrender.com/api/metal-doors/doors");
// };
