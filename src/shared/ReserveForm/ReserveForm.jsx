import Modal from "shared/Modal/Modal";
import FormInfo from "./FormInfo/FormInfo";
import ReserveResult from "shared/ReserveResult/ReserveResult";
import { useSelector } from "react-redux";
import { selectReserveMessage } from "redux/doors/doors-selectors";
import scss from "./ReserveForm.module.scss";

const ReserveForm = ({ isSelect }) => {
    const reserveStatus = useSelector(selectReserveMessage);
    return (
        <Modal>
            <div className={scss.reserve_wrapper}>
                {!reserveStatus ? <FormInfo isSelect={isSelect} /> : <ReserveResult />}
            </div>
        </Modal>
    );
};

export default ReserveForm;
