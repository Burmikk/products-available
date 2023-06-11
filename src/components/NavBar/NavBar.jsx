import scss from "./NavBar.module.scss";
import logo from "../../assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import { useState, useEffect } from "react";

const NavBar = ({ filterStatus }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        filterStatus(show);
    }, [show, filterStatus]);

    useEffect(() => {
        if (show) {
            // Получаем текущую позицию прокрутки страницы
            const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

            // Функция для предотвращения прокрутки
            const preventScroll = (event) => {
                event.preventDefault();
                window.scrollTo(0, scrollPosition);
            };

            // Добавляем обработчик события прокрутки
            window.addEventListener("scroll", preventScroll, { passive: false });

            // Очистка при размонтировании компонента
            return () => {
                window.removeEventListener("scroll", preventScroll);
            };
        }
    }, [show]);

    const toggelShowFilter = () => {
        setShow(!show);
    };
    return (
        <header className={scss.header}>
            <div className={scss.logo}>
                <div className={scss.icon_wrapper} onClick={toggelShowFilter}>
                    <BiMenu className={scss.icon} size={36} />
                </div>
                <a href="/">
                    <img className={scss.logo_img} src={logo} alt="logo" />
                </a>
            </div>
        </header>
    );
};

export default NavBar;
