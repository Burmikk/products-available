import scss from "./ReserveResult.module.scss";
import reserveSuccess from "../../assets/reserve_success.svg";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setReserveMessage, showReserve } from "redux/doors/doors-slice";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { selectReserveMessage } from "redux/doors/doors-selectors";
import { fetchAllDoors } from "redux/doors/doors-operations";

const ReserveResult = () => {
    const dispatch = useDispatch();
    const { message } = useSelector(selectReserveMessage);

    const location = useLocation();
    const resetMessage = () => {
        dispatch(setReserveMessage(""));
        dispatch(showReserve(false));
        if (location.pathname === "/") {
            dispatch(fetchAllDoors());
        }
    };

    if (message === "Бронирование выполнено успешно.") {
        return (
            <div className={scss.status}>
                <div className={scss.status_message}>
                    <img className={scss.logo} src={reserveSuccess} alt="Успіх" />
                    <h3 className={scss.title}>Заброньовано!</h3>
                    <p className={scss.text}>Бронювання буде активне впродовж наступних 48 годин</p>
                </div>
                <Link onClick={resetMessage} className={scss.btn} to="/">
                    На головну
                </Link>
            </div>
        );
    }

    if (message === "Вибачте, але даний продукт недоступний.") {
        return (
            <div className={scss.status}>
                <MdOutlineReportGmailerrorred className={scss.icon} size={100} color="red" />
                <p className={scss.text}>{message}</p>
                <Link onClick={resetMessage} className={scss.btn} to="/">
                    На головну
                </Link>
            </div>
        );
    }
};
export default ReserveResult;
