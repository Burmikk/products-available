import { createPortal } from "react-dom";
import scss from "./Modal.module.scss";
import { useSelector } from "react-redux";
import { selectAllDoors, selectIsLoading } from "redux/doors/doors-selectors";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children }) => {
    const doors = useSelector(selectAllDoors);
    const isLoading = useSelector(selectIsLoading);
    return createPortal(
        <div style={doors.length === 0 && isLoading ? { backgroundColor: "white" } : {}} className={scss.overlay}>
            {children}
        </div>,
        modalRoot
    );
};
export default Modal;
