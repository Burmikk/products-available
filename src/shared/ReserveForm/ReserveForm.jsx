import Modal from "shared/Modal/Modal";
import FormInfo from "./FormInfo/FormInfo";
import ReservResult from "shared/ReservResult/ReservResult";
import { useSelector } from "react-redux";
import { selectReservMessage } from "redux/doors/doors-selectors";

const ReserveForm = ({ isSelect }) => {
    const reservStatus = useSelector(selectReservMessage);
    return <Modal>{!reservStatus ? <FormInfo isSelect={isSelect} /> : <ReservResult />}</Modal>;
};

export default ReserveForm;
