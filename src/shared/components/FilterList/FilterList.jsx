import scss from "./FilterList.module.scss";
import { useState, useEffect } from "react";

const FilterList = ({ filterName, data, name, getRadioValue, getRadioName }) => {
    const [selectedValue, setSelectedValue] = useState();
    const [selectedName, setSelectedName] = useState();

    useEffect(() => {
        getRadioValue(selectedValue);
        getRadioName(selectedName);
    }, [selectedValue, selectedName]);

    const isChecked = (e) => {
        setSelectedValue(e.target.value);
        setSelectedName(e.target.name);
    };

    const result = data.map((item) => {
        return (
            <li className={scss.filter_item} key={item.id}>
                <input
                    onChange={isChecked}
                    className={scss.input}
                    id={item.name}
                    name={name}
                    value={item.id}
                    type="radio"
                    checked={selectedValue == item.id}
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
                <h2 className={scss.title}>{filterName}</h2>
                <p className={scss.reset} onClick={() => setSelectedValue("")}>
                    Скинути
                </p>
            </div>
            <ul className={scss.filter_list}>{result}</ul>
        </div>
    );
};
export default FilterList;
