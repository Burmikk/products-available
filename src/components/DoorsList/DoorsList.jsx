import Door from "./Door/Door";
import scss from "./DoorList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
    selectAllDoors,
    selectIsLoading,
    selectTotalDoors,
    selectShowForm,
    selectNext,
} from "redux/doors/doors-selectors";
import ReserveForm from "shared/components/ReserveForm/ReserveForm";
import { useEffect, useRef, useMemo } from "react";
import { fetchLoadMoreDoors } from "redux/doors/doors-operations";
import Modal from "shared/components/Modal/Modal";
import { selectShowFilter } from "redux/filter/filter-selectors";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const DoorsList = () => {
    const doors = useSelector(selectAllDoors);
    const next = useSelector(selectNext);
    const totalDoors = useSelector(selectTotalDoors);
    const isLoading = useSelector(selectIsLoading);
    const isFormShow = useSelector(selectShowForm);
    const isFilterSown = useSelector(selectShowFilter);
    const dispatch = useDispatch();
    const listRef = useRef();
    console.log("listRef--->", listRef.current);

    useEffect(() => {
        if (isFilterSown) {
            disableBodyScroll(listRef);
        } else {
            enableBodyScroll(listRef);
        }
    }, [isFilterSown]);

    const doorsList = useMemo(() => doors.map((item) => <Door door={item} key={item.id} />), [doors]);

    const loadMoreDoors = () => {
        dispatch(fetchLoadMoreDoors(next));
    };

    if (!isLoading && doors.length === 0) {
        return (
            <div className={scss.list_container}>
                <div className={scss.title_wrapper}>
                    <h2 className={scss.title}>Залишок дверей на складі у м. Запоржжя</h2>
                </div>
                <div className={scss.not_found}>
                    <h2 className={scss.text}> Нажаль, у наявності зараз нічого немає за вашим запитом</h2>
                </div>
            </div>
        );
    } else {
        return (
            <div ref={listRef} className={scss.door_list}>
                <div className={scss.title_wrapper}>
                    <h2 className={scss.title}>Залишок дверей на складі у м. Запоржжя</h2>
                </div>
                {isLoading && (
                    <Modal>
                        <div className={scss.logo_wrapper}>
                            <svg
                                className={scss.logo}
                                width="63"
                                height="70"
                                viewBox="0 0 43 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_261_4965)">
                                    <path
                                        d="M21.5 50L32.2493 43.7944L43 37.5875V35.7939V34.3993V30.0999V25.7991V25.175V23.334V21.4997V17.2003V12.8995V8.60015V4.30075V0H38.7005H34.3997H30.1003H26.8523H25.7995H21.5H17.1992H12.8997H8.60027H6.44986H4.29946H0V4.30075V8.60015V12.8995V17.2003V21.4997V25.7991V30.0999V31.9409V34.3993V35.7939V37.5875L4.29946 40.0703V35.1047V34.3993V30.0999V25.7991V21.4997V17.2003V16.0661V12.8995V8.60015V4.30075H6.44986H8.60027H12.8997H17.1992H21.5H25.7995H26.8523H30.1003H34.3997H38.7005V8.60015V12.8995V17.2003V21.4997V23.334V25.7991V30.0999V34.3993V35.1047L21.5 45.0358L13.3312 40.3199V30.0999V25.8005V25.3636H17.6306H21.9314H26.2309H30.5317V21.0642H26.2309H21.9314H17.6306H13.3312V17.2003V12.9009H17.6306H21.9314H26.2309H30.5317H34.8312V8.60015H30.5317H26.2309H21.9314H17.6306H13.3312H9.03171V12.9009V17.2003V21.5011V25.8005V30.0999V37.8371V42.2573V42.8027L10.7493 43.7944L21.5 50Z"
                                        fill={doors.length === 0 ? "#a8a3a3" : "#D9D9D9"}
                                    />
                                    <path
                                        d="M13.3329 40.5319V30.3724V26.0985V25.6642H17.6658H22H26.3329H30.6671V21.3902H26.3329H22H17.6658H13.3329V17.5492V13.2753H17.6658H22H26.3329H30.6671H35V9H30.6671H26.3329H22H17.6658H13.3329H9V13.2753V17.5492V21.8245V26.0985V30.3724V38.0639V42.4578V43L13.3329 40.5319Z"
                                        fill="#FF9400"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_261_4965">
                                        <rect width="43" height="50" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </Modal>
                )}
                <ul className={scss.list}>{doorsList} </ul>
                {isFormShow && <ReserveForm isSelect="" />}
                {doors.length < totalDoors && (
                    <button onClick={loadMoreDoors} className={scss.loadmoreBtn}>
                        Показати ще
                    </button>
                )}
            </div>
        );
    }
};
export default DoorsList;
