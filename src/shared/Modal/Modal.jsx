import { createPortal } from "react-dom";
import scss from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children }) => {
    return createPortal(
        <div className={scss.overlay}>
            <div className={scss.reserve_wrapper}>{children}</div>
        </div>,
        modalRoot
    );
};
export default Modal;
