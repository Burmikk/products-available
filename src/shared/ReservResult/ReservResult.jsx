import scss from "./ReservResult.module.scss";
import reservSuccess from "../../assets/reserv_success.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setReservMessage, showReserv } from "redux/doors/doors-slice";
const ReservResult = () => {
    const dispatch = useDispatch();

    const resetMessage = () => {
        dispatch(setReservMessage(""));
        dispatch(showReserv(false));
    };
    return (
        <div className={scss.status}>
            <img className={scss.logo} src={reservSuccess} alt="Успіх" />
            <h3 className={scss.title}>Заброньовано!</h3>
            <p className={scss.text}>Бронювання буде активне впродовж наступних 48 годин</p>
            <Link onClick={resetMessage} className={scss.btn} to="/">
                На головну
            </Link>
        </div>
    );
};
export default ReservResult;
