import Filter from "../../components/Filter/Filter";
import DoorsList from "../../components/DoorsList/DoorsList";
import scss from "./Home.module.scss";
import { fetchFilter } from "redux/filter/filter-operations";
import { fetchAllDoors } from "redux/doors/doors-operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilter());
        dispatch(fetchAllDoors());
    }, [dispatch]);

    return (
        <div className={scss.home}>
            <Filter />
            <DoorsList />
        </div>
    );
};
export default Home;
