import Filter from "../../components/Filter/Filter";
import DoorsList from "../../components/DoorsList/DoorsList";
import scss from "./Home.module.scss";
import { useState, useEffect } from "react";

import { selectShowFilter } from "redux/filter/filter-selectors";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useSelector } from "react-redux";

const Home = () => {
    const [doorRef, setDoorRef] = useState();
    console.log("doorRef--->", doorRef);
    const [formRef, setFormRef] = useState();
    console.log("formRef--->", formRef);
    const isFilterSown = useSelector(selectShowFilter);

    const getDoorRef = (ref) => {
        setDoorRef(ref);
    };
    const getFormRef = (ref) => {
        setFormRef(ref);
    };

    useEffect(() => {
        if (doorRef && formRef) {
            console.log("yes");
            if (isFilterSown) {
                console.log("show");
                const doorListElement = doorRef.current;
                disableBodyScroll(doorListElement, { allowTouchMove: (el) => el === formRef.current });
            } else {
                console.log("close");
                enableBodyScroll(doorRef.current);
            }
        }
    }, [isFilterSown, doorRef, formRef]);

    return (
        <div className={scss.home}>
            <Filter handleFormRef={getFormRef} />
            <DoorsList handleDoorRef={getDoorRef} />
        </div>
    );
};
export default Home;
