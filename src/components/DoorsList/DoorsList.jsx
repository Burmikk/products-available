import Door from "../../shared/components/Door/Door";
import { useEffect, useState } from "react";
import { getAllDoors } from "shared/api/getAllDoors";
import scss from "./DoorList.module.scss";
import img1 from "../../assets/doors-img/20220910_124412.jpg";
import img2 from "../../assets/doors-img/20220910_125838.jpg";
import { BsSearch } from "react-icons/bs";

const DoorsList = () => {
    const [doors, setDoors] = useState([]);
    useEffect(() => {
        // const allDoors = getAllDoors();
        // setDoors(allDoors);
    }, []);
    return (
        <div className={scss.door_list}>
            <div className={scss.title_wrapper}>
                <h2 className={scss.title}>Залишок дверей на складі</h2>
                <div className={scss.search_wrapper}>
                    <input className={scss.input} type="text" />
                    <BsSearch className={scss.icon} size={24} />
                </div>
            </div>
            <ul className={scss.list}>
                <Door img={img1} />
                <Door img={img2} />
                <Door img={img1} />
                <Door img={img2} />
                <Door img={img1} />
                <Door img={img2} />
                <Door img={img1} />
                <Door img={img2} />
            </ul>
        </div>
    );
};
export default DoorsList;
