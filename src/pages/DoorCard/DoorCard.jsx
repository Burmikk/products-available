import { useEffect, useState } from "react";
import scss from "./DoorCard.module.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoorCard } from "redux/doors/doors-operations";
import { selectDoorCard, selectShowForm } from "redux/doors/doors-selectors";
import { showReserve, setFormValue } from "redux/doors/doors-slice";
import ReserveForm from "shared/ReserveForm/ReserveForm";

const DoorCard = () => {
    const card = useSelector(selectDoorCard);
    const params = useParams();
    const dispatch = useDispatch();

    const [select, setSelect] = useState("");
    const [bigImg, setBigImg] = useState(null);
    const isFormShow = useSelector(selectShowForm);

    useEffect(() => {
        dispatch(fetchDoorCard(params.doorId));
    }, [dispatch, params.doorId]);

    const handleSelect = (e) => {
        const { value } = e.target;
        setSelect(value);
    };

    const handleClickImg = (src) => {
        setBigImg(src);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cardData = {
            image: card.door_model.outside_image,
            name: card.description.name,
            id: card.id,
            price: card.door_model.retail_price,
        };
        dispatch(setFormValue(cardData));
        dispatch(showReserve(!isFormShow));
    };
    if (card) {
        const formattedPrice = card.door_model.retail_price.toLocaleString();
        return (
            <>
                {isFormShow && <ReserveForm isSelect={select} />}
                <div className={scss.card}>
                    <Link className={scss.link} to={"/"}>
                        На головну
                    </Link>
                    <div className={scss.card_wrapper}>
                        {card.door_model.inside_image && (
                            <div className={scss.smallImg_wrapper}>
                                <div
                                    className={scss.smallImg_box}
                                    onClick={() => handleClickImg(card.door_model.outside_image)}
                                >
                                    <img
                                        className={scss.smallImg}
                                        src={card.door_model.outside_image}
                                        alt="маленькі двері"
                                    />
                                </div>
                                <div
                                    className={scss.smallImg_box}
                                    onClick={() => handleClickImg(card.door_model.inside_image)}
                                >
                                    <img
                                        className={scss.smallImg}
                                        src={card.door_model.inside_image}
                                        alt="маленькі двері"
                                    />
                                </div>
                            </div>
                        )}

                        <div className={scss.img_box}>
                            <img className={scss.img} src={bigImg || card.door_model.outside_image} alt="двері" />
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
                                            </option>
                                        </select>
                                    </div>
                                    <button className={scss.btn}>Забронювати</button>
                                </form>
                            </div>
                            <div>
                                <h3 className={scss.details_title}>Характеристики</h3>
                                <ul className={scss.details_list}>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Зовнішня накладка</p>
                                        <p className={scss.details_text}>{card.description.exterior_look}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Внутрішня накладка</p>
                                        <p className={scss.details_text}>{card.description.interior_look}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Основний замок</p>
                                        <p className={scss.details_text}>{card.description.main_lock}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Додатковий замок</p>
                                        <p className={scss.details_text}>{card.description.main_lock}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Циліндр</p>
                                        <p className={scss.details_text}>{card.description.cylinder}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Вічко</p>
                                        <p className={scss.details_text}>{card.description.peephole}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Зашиті торці</p>
                                        <p className={scss.details_text}>{card.description.end_decoration}</p>
                                    </li>
                                    <li className={scss.details_item}>
                                        <p className={scss.details_text}>Нержавіючий поріг</p>
                                        <p className={scss.details_text}>{card.description.stainless_threshold}</p>
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
