import logo from "../../assets/logo_footer.svg";
import { Link } from "react-router-dom";
import scss from "./Footer.module.scss";
const Footer = () => {
    return (
        <footer className={scss.footer}>
            <div className={scss.logo_wrapper}>
                <Link to="/">
                    <img className={scss.logo_img} src={logo} alt="logo" />
                </Link>
            </div>
            <div className={scss.footer_box}>
                <div className={scss.info_wrapper}>
                    <div className={scss.contacts}>
                        <a className={scss.link} href="tel:+380990929510" aria-label="Instagram">
                            +38 099 092 95 10
                        </a>
                        <a className={scss.link} href="tel:+380676322719">
                            +38 067 632 27 19
                        </a>
                        <a className={scss.link} href="mailto:fortnox.office48@gmail.com">
                            fortnox.office48@gmail.com
                        </a>
                    </div>
                    <a
                        className={scss.link}
                        href="https://goo.gl/maps/YqtcnE4NqJ8cceXh8"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <div className={scss.contacts}>
                            <p>вул. Перемоги, 48, Запоріжжя, </p>
                            <p>Запорізька обл., 69000</p>
                        </div>
                    </a>
                </div>
                <div className={scss.copyright}>
                    <p>&copy; 2023 Форт Нокс. Всі права захищені.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
