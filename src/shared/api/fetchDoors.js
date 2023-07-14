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

export const getDoorCard = (id) => {
    return instance.get(`doors/${id}/`);
};

export const reservation = (value) => {
    return instance.post(`/reservation/`, { ...value });
};

export const getMoreDoors = (value) => {
    return axios.get(value);
};
