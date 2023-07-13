import Filter from "../../components/Filter/Filter";
import DoorsList from "../../components/DoorsList/DoorsList";
import scss from "./Home.module.scss";
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={scss.home}>
            <Filter />
            <DoorsList />
        </div>
    );
};
export default Home;
