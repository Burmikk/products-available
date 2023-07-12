import logo from "../../assets/logo_footer.svg";
import { Link } from "react-router-dom";
import scss from "./Footer.module.scss";
const Footer = () => {
    return (
        <div className={scss.footer}>
            <div className={scss.logo_wrapper}>
                <Link to="/">
                    <img className={scss.logo_img} src={logo} alt="logo" />
                </Link>
            </div>
            <div className={scss.footer_box}>
                <div className={scss.info_wrapper}>
                    <div className={scss.contacts}>
                        <a href="tel:+380676322719">+380 67 632 27 19</a>
                        <a href="mailto:sales@fortnox.com">sales@fortnox.com</a>
                    </div>
                    <div className={scss.contacts}>
                        <p>вул. Перемоги, 48, Запоріжжя, </p>
                        <p>Запорізька обл., 69000</p>
                    </div>
                </div>
                <div className={scss.copyright}>
                    <p>&copy; 2023 Форт Нокс. Всі права захищені.</p>
                </div>
            </div>
        </div>
    );
};
export default Footer;
