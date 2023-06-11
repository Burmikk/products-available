import scss from "./NavBar.module.scss";
import logo from "../../assets/logo.svg";

const NavBar = () => {
    return (
        <header className={scss.nav}>
            <div className={scss.wrapper}>
                <div className={scss.logo}>
                    <a href="/">
                        <img className={scss.logo_img} src={logo} alt="logo" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
