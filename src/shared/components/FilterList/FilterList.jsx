import scss from "./FilterList.module.scss";
const FilterList = ({ filterName, data }) => {
    const result = data.map((item) => {
        return (
            <li className={scss.filter_wrapper} key={item.id}>
                <input id={item.name} type="checkbox" />
                <label htmlFor={item.name}>{item.name}</label>
            </li>
        );
    });
    return (
        <>
            <h2 className={scss.title}>{filterName}</h2>
            <ul className={scss.filter_list}>{result}</ul>
        </>
    );
};
export default FilterList;
