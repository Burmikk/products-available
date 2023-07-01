import axios from "axios";

export const instance = axios.create({
    baseURL: "https://doors-service.onrender.com/api/metal-doors/",
});

export const getAllDoors = () => {
    return instance.get("doors/");
};

export const getFilteredDoors = (values) => {
    return instance.get("doors/", {
        params: values,
    });
};
