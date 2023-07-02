import scss from "./FilterList.module.scss";
import { useState, useEffect } from "react";

const FilterList = ({ filterTitle, data, filterName, getRadioValue, getRadioName }) => {
    const [selectedValue, setSelectedValue] = useState();
    const [selectedName, setSelectedName] = useState();
    const [checked, setChecked] = useState();

    useEffect(() => {
        if (selectedName) {
            getRadioValue(selectedValue);
            getRadioName(selectedName);
        }
    }, [selectedValue, selectedName, getRadioName, getRadioValue]);

    const isChecked = (e, filterName) => {
        const { name, value } = e.target;
        setChecked(value);

        if (filterName === "size_side") {
            setSelectedValue(0);
            setSelectedName(name);
        } else {
            setSelectedValue(value);
            setSelectedName(name);
        }
    };

    const filterReset = () => {
        setChecked("");
        setSelectedValue("delete");
    };

    const filterItem = data.map((item) => {
        return (
            <li className={scss.filter_item} key={item.id}>
                <input
                    onClick={(e) => isChecked(e, filterName)}
                    className={scss.input}
                    id={item.name}
                    name={filterName === "size_side" ? item.value : filterName}
                    value={item.id}
                    type="radio"
                    checked={+checked === item.id}
                />

                <label className={scss.label} htmlFor={item.name}>
                    {item.name}
                </label>
            </li>
        );
    });

    return (
        <div className={scss.filter_wrapper}>
            <div className={scss.title_box}>
                <h2 className={scss.title}>{filterTitle}</h2>
                <p className={scss.reset} onClick={filterReset}>
                    Скинути
                </p>
            </div>
            <ul className={scss.filter_list}>{filterItem}</ul>
        </div>
    );
};
export default FilterList;
