import scss from "./ReservResult.module.scss";
import reservSuccess from "../../assets/reserv_success.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setReservMessage, showReserv } from "redux/doors/doors-slice";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { selectReservMessage } from "redux/doors/doors-selectors";
const ReservResult = () => {
    const dispatch = useDispatch();
    const { message } = useSelector(selectReservMessage);
    const resetMessage = () => {
        dispatch(setReservMessage(""));
        dispatch(showReserv(false));
    };

    if (message === "Бронирование выполнено успешно.") {
        return (
            <div className={scss.status}>
                <div className={scss.status_message}>
                    <img className={scss.logo} src={reservSuccess} alt="Успіх" />
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
export default ReservResult;
