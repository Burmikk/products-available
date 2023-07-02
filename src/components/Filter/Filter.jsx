import scss from "./Filter.module.scss";
import { useEffect, useState } from "react";
import { selectShowFilter } from "redux/filter/filter-selectors";
import { useSelector, useDispatch } from "react-redux";
import { selectAllFilters } from "redux/filter/filter-selectors";
import { fetchFilterDoors } from "redux/doors/doors-operations";
import FilterList from "./FilterList/FilterList";

const Filter = () => {
    const [radioValue, setRadioValue] = useState();
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
    const showFilter = useSelector(selectShowFilter);

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
    }, [radioValue, radioName, size, inputValue]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(fetchFilterDoors({ ...inputValue, ...size }));
    };

    const addRadioValue = (value) => {
        setRadioValue(value);
    };

    const addRadioName = (value) => {
        setRadioName(value);
    };

    const filterStyle = showFilter ? `${scss.filter} ${scss.show_filter}` : ` ${scss.filter}`;
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
        <form className={filterStyle} onSubmit={handleSubmit}>
            {filterList}
            <button type="submit" className={scss.btn}>
                Показати
            </button>
        </form>
    );
};
export default Filter;
