import scss from "./NavBar.module.scss";
import { fetchFilter } from "redux/filter/filter-operations";
import { fetchAllDoors } from "redux/doors/doors-operations";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
    const dispatch = useDispatch();
    const handleUpdate = () => {
        dispatch(fetchFilter());
        dispatch(fetchAllDoors());
    };
    return (
        <header className={scss.header}>
            <div className={scss.logo}>
                <Link onClick={handleUpdate} to="/">
                    <img className={scss.logo_img} src={logo} alt="logo" />
                </Link>
            </div>
        </header>
    );
};

export default NavBar;
