import scss from "./Filter.module.scss";
import FilterList from "../../shared/components/FilterList/FilterList";
import { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
import { selectAllFilters } from "redux/filter/filter-selectors";

const Filter = ({ showFilter, filterResult }) => {
    const [filteredDoors, setFilteredDoors] = useState();
    console.log("filteredDoors--->", filteredDoors);
    const [inputValue, setInputValue] = useState({});
    const [radioValue, setRadioValue] = useState();
    const [radioName, setRadioName] = useState();
    const [size, setSize] = useState({});
    const allFilters = useSelector(selectAllFilters);

    //Пробросить список дверей наверх
    useEffect(() => {
        filterResult(filteredDoors);
    }, [filteredDoors]);

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
    }, [radioValue, radioName]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data } = await axios.get("https://doors-service.onrender.com/api/metal-doors/doors/", {
            params: { ...inputValue, ...size },
        });
        setFilteredDoors(data.results);
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
