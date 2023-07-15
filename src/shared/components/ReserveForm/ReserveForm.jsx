import Modal from "shared/components/Modal/Modal";
import FormInfo from "./FormInfo/FormInfo";
import ReserveResult from "shared/components/ReserveResult/ReserveResult";
import { useSelector } from "react-redux";
import { selectError, selectReserveMessage } from "redux/doors/doors-selectors";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import scss from "./ReserveForm.module.scss";

const ReserveForm = ({ isSelect, selectText }) => {
    const reserveStatus = useSelector(selectReserveMessage);
    const error = useSelector(selectError);
    useEffect(() => {
        if (error === "failed_password") {
            toast.error("Невірне імʼя або пароль", {
                position: "top-center",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }, [error]);
    return (
        <Modal>
            <div className={scss.reserve_wrapper}>
                {!reserveStatus ? <FormInfo isSelect={isSelect} text={selectText} /> : <ReserveResult />}
                <ToastContainer />
            </div>
        </Modal>
    );
};

export default ReserveForm;
