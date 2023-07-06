import scss from "./Filter.module.scss";
import { useEffect, useState } from "react";
import { selectShowFilter } from "redux/filter/filter-selectors";
import { useSelector, useDispatch } from "react-redux";
import { selectAllFilters } from "redux/filter/filter-selectors";
import { fetchFilterDoors } from "redux/doors/doors-operations";
import FilterList from "./FilterList/FilterList";
import { IoOptionsOutline } from "react-icons/io5";

import { showFilter } from "redux/filter/filter-slice";

const Filter = () => {
    const [radioValue, setRadioValue] = useState();
    const [radioName, setRadioName] = useState();

    //Хранит значение выбраных фильтров в поле размеры
    const [size, setSize] = useState({});
    //Хранит значение выбраных фильтров (кроме size)
    const [inputValue, setInputValue] = useState({});
    //Берет из стейта все существующие фильтра для отрисовки
    const allFilters = useSelector(selectAllFilters);
    //Берет из стейта состояние фильтра (показывать или скрыть)
    const isFilterShown = useSelector(selectShowFilter);

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
        dispatch(showFilter(false));
    };

    const addRadioValue = (value) => {
        setRadioValue(value);
    };

    const addRadioName = (value) => {
        setRadioName(value);
    };

    const toggelShowFilter = () => {
        dispatch(showFilter(!isFilterShown));
    };

    const filterStyle = isFilterShown ? `${scss.filter} ${scss.show_filter}` : ` ${scss.filter}`;
    const filterList = allFilters.map((item, index) => (
        <FilterList
            key={index}
            filterName={item.name}
            filterTitle={item.title}
            data={item.data}
            getRadioValue={addRadioValue}
            getRadioName={addRadioName}
        />
    ));
    return (
        <>
            <div className={scss.icon_wrapper} onClick={toggelShowFilter}>
                <IoOptionsOutline className={scss.icon} size={40} />
            </div>
            <form className={filterStyle} onSubmit={handleSubmit}>
                {filterList}
                <button type="submit" className={scss.btn}>
                    Показати
                </button>
            </form>
        </>
    );
};
export default Filter;
