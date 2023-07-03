import Filter from "../../components/Filter/Filter";
import DoorsList from "../../components/DoorsList/DoorsList";
import { useEffect } from "react";
import { fetchFilter } from "redux/filter/filter-operations";
import { fetchAllDoors } from "redux/doors/doors-operations";
import { useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilter());
        dispatch(fetchAllDoors());
    }, [dispatch]);
    return (
        <>
            <Filter />
            <DoorsList />
        </>
    );
};
export default Home;
