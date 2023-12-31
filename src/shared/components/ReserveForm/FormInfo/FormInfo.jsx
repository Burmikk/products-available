import scss from "./FormInfo.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetError, showReserve } from "redux/doors/doors-slice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { selectError, selectFormValue } from "redux/doors/doors-selectors";
import { fetchReservation } from "redux/doors/doors-operations";
import Select from "shared/components/Select/Select";

const FormInfo = ({ isSelect, text, getReserveInfo }) => {
    const [select, setSelect] = useState(isSelect);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [selectText, setSelectText] = useState(text);
    const dispatch = useDispatch();
    const formValue = useSelector(selectFormValue);
    const error = useSelector(selectError);

    const handleClose = () => {
        dispatch(showReserve(false));
        if (error) {
            dispatch(resetError());
        }
    };

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        if (name === "name") {
            setName(value.trim());
        }
        if (name === "password") {
            setPassword(value.trim());
        }
    };

    const handleSelect = (e) => {
        const { value } = e.target;
        const optionText = e.target.options[e.target.selectedIndex].text;
        setSelectText(optionText);
        setSelect(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const value = {
            door_id: formValue.id,
            position: select,
            name,
            password,
            door_name: formValue.name,
            size: selectText,
        };

        getReserveInfo(value);
        dispatch(fetchReservation(value));
    };

    const formattedPrice = formValue.price.toLocaleString();

    return (
        <div>
            <div className={scss.icon_wrapper} onClick={handleClose}>
                <AiOutlineCloseCircle className={scss.icon_close} size={32} />
            </div>
            <h2 className={scss.title}>Для підтвердження бронювання, будь ласка, введіть назву ФОП</h2>
            <input className={scss.input} onChange={handleInputChange} type="text" name="name" placeholder="ФОП" />
            <input
                className={scss.input}
                onChange={handleInputChange}
                type="password"
                name="password"
                placeholder="Пароль"
            />

            <form className={scss.form} onSubmit={handleSubmit}>
                <div className={scss.description}>
                    <img className={scss.img} src={formValue.image} alt="двері" />
                    <div className={scss.description_box}>
                        <h2 className={scss.description_title}>{formValue.name}</h2>

                        <Select select={select} onChange={handleSelect} />
                        <p className={scss.price}>{`${formattedPrice} грн`}</p>
                    </div>
                </div>
                <div className={scss.btn_wrapper}>
                    <button type="button" className={`${scss.btn} ${scss.cancel}`} onClick={handleClose}>
                        Відмінити
                    </button>
                    <button disabled={!name || !select || !password} className={scss.btn}>
                        Бронювати
                    </button>
                </div>
            </form>
        </div>
    );
};
export default FormInfo;
