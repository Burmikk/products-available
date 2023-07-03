import { useEffect, useState } from "react";
import scss from "./DoorCard.module.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoorCard } from "redux/doors/doors-operations";
import { selectDoorCard, selectShowForm } from "redux/doors/doors-selectors";
import { showReserv } from "redux/doors/doors-slice";
import ReserveForm from "shared/ReserveForm/ReserveForm";

const DoorCard = () => {
    const [select, setSelect] = useState("");
    const card = useSelector(selectDoorCard);
    const isFormShow = useSelector(selectShowForm);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDoorCard(params.doorId));
    }, [params.doorId, dispatch]);

    const handleSelect = (e) => {
        const { value } = e.target;
        setSelect(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(showReserv(!isFormShow));
    };
    if (card) {
        const formattedPrice = card.door_model.retail_price.toLocaleString();
        return (
            <>
                {isFormShow && (
                    <ReserveForm
                        isSelect={select}
                        img={card.door_model.outside_image}
                        title={card.description.name}
                        price={formattedPrice}
                        id={card.id}
                    />
                )}
                <div className={scss.card}>
                    <Link className={scss.link} to={"/"}>
                        На головну
                    </Link>
                    <div className={scss.card_wrapper}>
                        <div className={scss.img_box}>
                            <img className={scss.img} src={card.door_model.outside_image} alt="двері" />
                        </div>
                        <div className={scss.card_info}>
                            <div>
                                <h2 className={scss.title}>{card.description.name}</h2>
                                <p className={scss.price}>{`${formattedPrice} грн`}</p>
                                <form className={scss.form} onSubmit={handleSubmit}>
                                    <div className={scss.select_wrapper}>
                                        <select className={scss.select} onChange={handleSelect}>
                                            {select === "" && (
                                                <option className={scss.select_text}>Виберіть розмір</option>
                                            )}
                                            <option value="right_8" className={scss.select_text}>
                                                850 х 2030 / права
                                            </option>
                                            <option value="left_8" className={scss.select_text}>
                                                850 х 2030 / ліва
                                            </option>
                                            <option value="right_9" className={scss.select_text}>
                                                950 х 2030 / права
                                            </option>
                                            <option value="left_9" className={scss.select_text}>
                                                950 х 2030 / ліва
                                            </option>{" "}
                                        </select>
                                    </div>
                                    <button className={scss.btn}>Забронювати</button>
                                </form>
                            </div>
                            <div>
                                <h3 className={scss.details_title}>Характеристики</h3>
                                <ul className={scss.details_list}>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Нижній замок</p>
                                        <p className={scss.details_text}>{card.description.main_lock}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Нижній замок</p>
                                        <p className={scss.details_text}>{card.description.main_lock}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Нижній замок</p>
                                        <p className={scss.details_text}>{card.description.main_lock}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Нижній замок</p>
                                        <p className={scss.details_text}>{card.description.main_lock}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Нижній замок</p>
                                        <p className={scss.details_text}>{card.description.main_lock}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Нижній замок</p>
                                        <p className={scss.details_text}>{card.description.main_lock}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Нижній замок</p>
                                        <p className={scss.details_text}>{card.description.main_lock}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Нижній замок</p>
                                        <p className={scss.details_text}>{card.description.main_lock}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default DoorCard;
