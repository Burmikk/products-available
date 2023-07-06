import axios from "axios";

export const instance = axios.create({
    baseURL: "https://doors-service.onrender.com/api/metal-doors/",
});

export const getAllDoors = (pageValue = 1) => {
    const page = pageValue;
    return instance.get("doors/", {
        params: { page },
    });
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
