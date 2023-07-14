import Filter from "../../components/Filter/Filter";
import DoorsList from "../../components/DoorsList/DoorsList";
import scss from "./Home.module.scss";
import { useState, useEffect } from "react";
const Home = () => {
    const [doorRef, setDoorRef] = useState();
    console.log("doorRef--->", doorRef);
    const [formRef, setFormRef] = useState();
    console.log("formRef--->", formRef);

    const getDoorRef = (ref) => {
        setDoorRef(ref);
    };
    const getFormRef = (ref) => {
        setFormRef(ref.current);
    };

    return (
        <div className={scss.home}>
            <Filter handleFormRef={getFormRef} />
            <DoorsList handleDoorRef={getDoorRef} />
        </div>
    );
};
export default Home;
