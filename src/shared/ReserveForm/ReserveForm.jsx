import Modal from "shared/Modal/Modal";
import FormInfo from "./FormInfo/FormInfo";
import ReserveResult from "shared/ReserveResult/ReserveResult";
import { useSelector } from "react-redux";
import { selectReserveMessage } from "redux/doors/doors-selectors";

const ReserveForm = ({ isSelect }) => {
    const reserveStatus = useSelector(selectReserveMessage);
    return <Modal>{!reserveStatus ? <FormInfo isSelect={isSelect} /> : <ReserveResult />}</Modal>;
};

export default ReserveForm;
