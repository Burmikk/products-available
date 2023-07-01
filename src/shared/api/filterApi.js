import { instance } from "./fetchDoors";

export const getFilters = () => {
    return instance.get("filters/");
};
