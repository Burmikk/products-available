import { useSelector } from "react-redux";
import { selectFormValue } from "redux/doors/doors-selectors";
import scss from "./Select.module.scss";
import { useMemo } from "react";

const Select = ({ select = "", onChange }) => {
    const formValue = useSelector(selectFormValue);
    const options = useMemo(
        () =>
            formValue.sizes
                .filter((item) => item.quantity > 0)
                .map((item) => (
                    <option value={item.name} className={scss.select_text}>
                        {item.text}
                    </option>
                )),
        [formValue.sizes]
    );

    return (
        <select value={select} className={scss.select} onChange={onChange}>
            {select === "" && <option className={scss.select_text}>Виберіть розмір</option>}
            {options}
        </select>
    );
};
export default Select;
