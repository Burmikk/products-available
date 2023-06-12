import Door from "../../shared/components/Door/Door";
import { useEffect, useState } from "react";
import { getAllDoors } from "shared/api/getAllDoors";
import scss from "./DoorList.module.scss";
import { BsSearch } from "react-icons/bs";
import { MagnifyingGlass } from "react-loader-spinner";

const DoorsList = () => {
    const [doors, setDoors] = useState([]);

    useEffect(() => {
        const fetchDoors = async () => {
            try {
                const { data } = await getAllDoors();
                setDoors(data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchDoors();
    }, []);

    const doorsList = doors.map((item) => <Door key={item.id} img={item.door_model.small_image} />);

    return (
        <div className={scss.door_list}>
            <div className={scss.title_wrapper}>
                <h2 className={scss.title}>Залишок дверей на складі</h2>
                <div className={scss.search_wrapper}>
                    <input className={scss.input} type="text" />
                    <BsSearch className={scss.icon} size={24} />
                </div>
            </div>

            {doors.length === 0 ? (
                <div className={scss.spiner_wrapper}>
                    <MagnifyingGlass
                        visible={true}
                        height="100"
                        width="100"
                        ariaLabel="MagnifyingGlass-loading"
                        wrapperStyle={{}}
                        wrapperClass="MagnifyingGlass-wrapper"
                        glassColor="#fff"
                        color="#ff9400"
                    />
                </div>
            ) : (
                <ul className={scss.list}>{doorsList} </ul>
            )}
        </div>
    );
};
export default DoorsList;
