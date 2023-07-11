import Modal from "shared/components/Modal/Modal";
import FormInfo from "./FormInfo/FormInfo";
import ReserveResult from "shared/components/ReserveResult/ReserveResult";
import { useSelector } from "react-redux";
import { selectReserveMessage } from "redux/doors/doors-selectors";
import scss from "./ReserveForm.module.scss";

const ReserveForm = ({ isSelect, selectText }) => {
    const reserveStatus = useSelector(selectReserveMessage);
    return (
        <Modal>
            <div className={scss.reserve_wrapper}>
                {!reserveStatus ? <FormInfo isSelect={isSelect} text={selectText} /> : <ReserveResult />}
            </div>
        </Modal>
    );
};

export default ReserveForm;
