import scss from "./FilterList.module.scss";
import { useState, useEffect, useRef } from "react";

const FilterList = ({ filterTitle, data, filterName, getRadioValue, getRadioName }) => {
    const [selectedValue, setSelectedValue] = useState();
    const [selectedName, setSelectedName] = useState();
    const [checked, setChecked] = useState();
    const [showMore, setShowMore] = useState(false);
    const [currentHeight, setCurrentHeight] = useState();
    const [smallHeight, setSmallHeight] = useState();

    const elementRef = useRef(null);
    // используя ссылку на элемент получаем его высоту
    // и записываем в стейт при первом рендере
    useEffect(() => {
        if (elementRef.current) {
            const elementHeigth = elementRef.current.clientHeight;
            setCurrentHeight(elementHeigth);
        }
    }, []);
    // когда появится реальная высота элемента
    // записываем в стейт высоту которая должна быть у элемента в свернутом виде
    // и ниже инлайново присваивем по нажатии кнопки либо общую либо свернутую высоту
    useEffect(() => {
        if (currentHeight) {
            const newHeight = 145;
            setSmallHeight(newHeight);
        }
    }, [currentHeight]);

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

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const filterReset = () => {
        setChecked("");
        setSelectedValue("delete");
    };

    const filterItem = data.map((item, index, arr) => {
        return (
            <li className={scss.filter_item} key={item.id}>
                <input
                    onChange={(e) => isChecked(e, filterName)}
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

    const showListStyles = showMore ? `${scss.filter_list} ${scss.show_list}` : scss.filter_list;
    const minLength = data.length > 4 ? `${scss.filter_wrapper} ${scss.new_styles}` : scss.filter_wrapper;

    return (
        <div className={minLength}>
            <div className={scss.title_box}>
                <h2 className={scss.title}>{filterTitle}</h2>
                <p className={scss.reset} onClick={filterReset}>
                    Скинути
                </p>
            </div>
            <ul style={{ height: showMore ? currentHeight : smallHeight }} ref={elementRef} className={showListStyles}>
                {filterItem}
            </ul>
            {data.length > 4 && (
                <p className={scss.showBtn} onClick={handleShowMore}>
                    {showMore ? "Згорнути" : "Показати всі"}
                </p>
            )}
        </div>
    );
};
export default FilterList;
