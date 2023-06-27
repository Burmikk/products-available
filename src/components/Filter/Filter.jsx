import scss from "./Filter.module.scss";
import FilterList from "../../shared/components/FilterList/FilterList";
import { useEffect, useState } from "react";

import { getSizes, getCollections, getModels } from "shared/api/fetchDoors";
import axios from "axios";

const Filter = ({ showFilter, filterResult }) => {
    // const [sizes, setSizes] = useState([]);
    const [collections, setCollections] = useState([]);
    const [models, setModels] = useState([]);
    const [filterData, setFilterData] = useState();
    const [inputValue, setInputValue] = useState(null);
    const [radioValue, setRadioValue] = useState();
    const [radioName, setRadioName] = useState();

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const { data } = await getCollections();
                setCollections(data);
            } catch (error) {}
        };
        fetchCollections();
    }, []);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const { data } = await getModels();
                setModels(data);
            } catch (error) {}
        };
        fetchModels();
    }, []);

    // useEffect(() => {
    //     const fetchSizes = async () => {
    //         try {
    //             const { data } = await getSizes();
    //             setSizes(data);
    //         } catch (error) {}
    //     };
    //     fetchSizes();
    // }, []);

    //Пробросить список дверей наверх
    useEffect(() => {
        filterResult(filterData);
    }, [filterData]);

    //Формирует объект для HTTP запроса
    useEffect(() => {
        const handleRadioChange = () => {
            if (radioValue) {
                setInputValue((prevState) => {
                    return { ...prevState, [radioName]: radioValue };
                });
            } else if (inputValue && !radioValue) {
                delete inputValue[radioName];
            }
        };
        handleRadioChange();
    }, [radioValue, radioName]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.get("https://doors-service.onrender.com/api/metal-doors/doors/", {
            params: inputValue,
        });
        setFilterData(data);
    };

    const addRadioValue = (value) => {
        setRadioValue(value);
    };

    const addRadioName = (value) => {
        setRadioName(value);
    };

    const filterStyle = showFilter ? `${scss.filter} ${scss.show_filter}` : ` ${scss.filter}`;

    return (
        <form className={filterStyle} onSubmit={handleSubmit}>
            <FilterList
                getRadioValue={addRadioValue}
                getRadioName={addRadioName}
                name="collection"
                filterName="Колекція"
                data={collections}
            />
            <FilterList
                getRadioValue={addRadioValue}
                getRadioName={addRadioName}
                name="door_model"
                filterName="Модель"
                data={models}
            />
            {/* <FilterList filterName="Розмір / Відкривання" data={sizes} /> */}
            <button type="submit" className={scss.btn}>
                Показати
            </button>
        </form>
    );
};
export default Filter;
