import axios from "axios";

const Instance = axios.create({
    baseURL: "https://doors-service.onrender.com/api/metal-doors/",
});

export const getAllDoors = () => {
    return Instance.get("doors/");
};
