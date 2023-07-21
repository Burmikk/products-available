import scss from "./Filter.module.scss";
import { useEffect, useMemo, useState } from "react";
import { selectShowFilter } from "redux/filter/filter-selectors";
import { useSelector, useDispatch } from "react-redux";
import { selectAllFilters } from "redux/filter/filter-selectors";
import { fetchFilterDoors } from "redux/doors/doors-operations";
import FilterList from "./FilterList/FilterList";
import { IoOptionsOutline } from "react-icons/io5";
import { BsArrowLeftCircle } from "react-icons/bs";

import { showFilter } from "redux/filter/filter-slice";
import { nanoid } from "nanoid";
import { useMediaQuery } from "react-responsive";

const Filter = () => {
    const [radioValue, setRadioValue] = useState();
    console.log("radioValue--->", radioValue);
    const [radioName, setRadioName] = useState();

    //Хранит значение выбраных фильтров в поле размеры
    const [size, setSize] = useState({});
    console.log("size--->", size);
    //Хранит значение выбраных фильтров (кроме size)
    const [inputValue, setInputValue] = useState({});
    console.log("inputValue--->", inputValue);
    //Берет из стейта все существующие фильтра для отрисовки
    const allFilters = useSelector(selectAllFilters);
    //Берет из стейта состояние фильтра (показывать или скрыть)
    const isFilterShown = useSelector(selectShowFilter);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    const dispatch = useDispatch();
    //Формирует объект для HTTP запроса

    useEffect(() => {
        const handleRadioChange = () => {
            if (radioValue === "delete") {
                delete inputValue[radioName];
                delete size[radioName];
            } else if (radioValue === 0) {
                setSize({ [radioName]: radioValue });
            } else if (radioValue > 0) {
                setInputValue((prevState) => {
                    return { ...prevState, [radioName]: radioValue };
                });
            }
        };
        handleRadioChange();
        // eslint-disable-next-line
    }, [radioValue, radioName]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(fetchFilterDoors({ ...inputValue, ...size }));
        if (isFilterShown) {
            dispatch(showFilter(false));
        }
    };

    const addRadioValue = (value) => {
        console.log("value--->", value);
        setRadioValue(value);
    };

    const addRadioName = (value) => {
        setRadioName(value);
    };

    const toggelShowFilter = () => {
        dispatch(showFilter(!isFilterShown));
    };

    const filterStyle = isFilterShown ? `${scss.filter} ${scss.show_filter}` : ` ${scss.filter}`;
    const btnStyle = isFilterShown ? `${scss.btn} ${scss.show_btn}` : ` ${scss.btn}`;

    const filterList = useMemo(
        () =>
            allFilters.map((item) => (
                <FilterList
                    key={nanoid()}
                    filterName={item.name}
                    filterTitle={item.title}
                    data={item.data}
                    getRadioValue={addRadioValue}
                    getRadioName={addRadioName}
                />
            )),
        [allFilters]
    );
    return (
        <>
            <div className={scss.icon_wrapper} onClick={toggelShowFilter}>
                {isFilterShown ? (
                    <BsArrowLeftCircle className={scss.icon} size={40} />
                ) : (
                    <IoOptionsOutline className={scss.icon} size={40} />
                )}
            </div>
            <div className={scss.filter_container}>
                <div className={scss.form_wrapper}>
                    <form className={filterStyle} onSubmit={handleSubmit}>
                        {filterList}
                        {!isMobile && (
                            <button type="submit" className={scss.btn}>
                                Показати
                            </button>
                        )}
                    </form>
                </div>
            </div>
            {isMobile && (
                <button type="submit" className={btnStyle} onClick={handleSubmit}>
                    Показати
                </button>
            )}
        </>
    );
};
export default Filter;
// 🔍
