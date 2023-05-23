import scss from "./NavBar.module.scss";
import logo from "../../assets/logo/logo.png";

const NavBar = () => {
    return (
        <div className={scss.nav}>
            <div className={scss.wrapper}>
                <div className={scss.logo}>
                    <h2 className={scss.logo_text}>Форт Нокс</h2>
                    <a href="http://google.com">
                        <img className={scss.logo_img} src={logo} alt="logo" />
                    </a>
                </div>
                <div className={scss.contacts}>
                    <p>Каталог</p>
                    <p>Контакти</p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
