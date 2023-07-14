import Filter from "../../components/Filter/Filter";
import DoorsList from "../../components/DoorsList/DoorsList";
import scss from "./Home.module.scss";

const Home = () => {
    return (
        <div className={scss.home}>
            <Filter />
            <DoorsList />
        </div>
    );
};
export default Home;
