import axios from "axios";

const Instance = axios.create({
    baseURL: "https://doors-service.onrender.com/api/metal-doors/",
});

export const getAllDoors = () => {
    return Instance.get("doors/");
};

export const getSizes = () => {
    return Instance.get("sizes-sides/");
};

export const getCollections = () => {
    return Instance.get("collections/");
};
export const getModels = () => {
    return Instance.get("door-models/");
};
