import scss from "./Filter.module.scss";
import FilterList from "../../shared/components/FilterList/FilterList";
import city from "../../shared/data/city.json";
import collection from "../../shared/data/collection.json";
import models from "../../shared/data/models.json";
import size from "../../shared/data/size.json";

const Filter = ({ showFilter }) => {
    const filterStyle = showFilter ? `${scss.filter} ${scss.show_filter}` : `${""} ${scss.filter}`;
    return (
        <div className={filterStyle}>
            <FilterList filterName="Місто" data={city} />
            <FilterList filterName="Коллекція" data={collection} />
            <FilterList filterName="Модель" data={models} />
            <FilterList filterName="Розмір / Відкривання" data={size} />

            <button className={scss.btn}>Показати</button>
        </div>
    );
};
export default Filter;
