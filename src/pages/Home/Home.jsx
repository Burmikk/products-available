import Filter from "../../components/Filter/Filter";
import DoorsList from "../../components/DoorsList/DoorsList";
import { useEffect } from "react";
import { fetchFilter } from "redux/filter/filter-operations";
import { fetchAllDoors } from "redux/doors/doors-operations";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectShowFilter } from "redux/filter/filter-selectors";

const Home = () => {
    const dispatch = useDispatch();
    const show = useSelector(selectShowFilter);

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

    useEffect(() => {
        dispatch(fetchFilter());
        dispatch(fetchAllDoors());
    }, [dispatch]);
    return (
        <>
            <Filter />
            <DoorsList />
        </>
    );
};
export default Home;
