import scss from "./Filter.module.scss";
import FilterList from "../../shared/components/FilterList/FilterList";
import city from "../../shared/data/city.json";
import collection from "../../shared/data/collection.json";
import models from "../../shared/data/models.json";
import size from "../../shared/data/size.json";
import openSide from "../../shared/data/open-side.json";

const Filter = () => {
    return (
        <div className={scss.filter}>
            <FilterList filterName="Оберіть місто" data={city} />
            <FilterList filterName="По колекціям" data={collection} />
            <FilterList filterName="По моделі" data={models} />
            <FilterList filterName="За розміром" data={size} />
            <FilterList filterName="По відкриванню" data={openSide} />
        </div>
    );
};
export default Filter;
