import Door from "./Door/Door";
import scss from "./DoorList.module.scss";
import { MagnifyingGlass } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectAllDoors, selectIsLoading } from "redux/doors/doors-selectors";
import { selectShowForm } from "redux/doors/doors-selectors";
import ReserveForm from "shared/ReserveForm/ReserveForm";
import { useState } from "react";

const DoorsList = () => {
    // const [image, setImage] = useState();
    // const [id, setId] = useState();
    // const [model, setModel] = useState();
    // const [collection, setCollection] = useState();
    const doors = useSelector(selectAllDoors);
    const isLoading = useSelector(selectIsLoading);
    const isFormShow = useSelector(selectShowForm);

    // const getValue = (img) => {
    //     setImage(img);
    // };

    const doorsList = doors.map((item) => <Door door={item} key={item.id} />);

    if (isLoading) {
        return (
            <div className={scss.door_list}>
                <div className={scss.title_wrapper}>
                    <h2 className={scss.title}>Залишок дверей на складі</h2>
                </div>
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
            </div>
        );
    } else if (doors.length === 0) {
        return (
            <div className={scss.door_list}>
                <div className={scss.title_wrapper}>
                    <h2 className={scss.title}>Залишок дверей на складі</h2>
                </div>
                <div className={scss.not_found}>
                    <h2 className={scss.text}> Нажаль, у наявності зараз нічого немає за вашим запитом</h2>
                </div>
            </div>
        );
    } else {
        return (
            <div className={scss.door_list}>
                <div className={scss.title_wrapper}>
                    <h2 className={scss.title}>Залишок дверей на складі</h2>
                </div>

                <ul className={scss.list}>{doorsList} </ul>
                {isFormShow && (
                    <ReserveForm
                        isSelect=""
                        // img={image}
                        // title={`${door.collection.name} ${door.door_model.name}`}
                        // price={door.door_model.retail_price}
                        // id={door.id}
                    />
                )}
            </div>
        );
    }
};
export default DoorsList;
