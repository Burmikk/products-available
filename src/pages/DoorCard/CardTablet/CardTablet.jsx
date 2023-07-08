import scss from "./CardTablet.module.scss";
import ReserveForm from "shared/ReserveForm/ReserveForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDoorCard, selectFormValue, selectShowForm } from "redux/doors/doors-selectors";

const CardTablet = ({ select, onChange, handleClickImg, bigImg, handleSubmit }) => {
    const card = useSelector(selectDoorCard);
    const formValue = useSelector(selectFormValue);
    const isFormShow = useSelector(selectShowForm);

    const formattedPrice = card.door_model.retail_price.toLocaleString();

    const options = formValue.sizes
        .filter((item) => item.quantity > 0)
        .map((item) => (
            <option value={item.name} className={scss.select_text}>
                {item.text}
            </option>
        ));

    return (
        <>
            {isFormShow && <ReserveForm isSelect={select} />}
            <div className={scss.card}>
                <div className={scss.card_wrapper}>
                    <div className={scss.img_box}>
                        <img className={scss.img} src={bigImg || card.door_model.outside_image} alt="двері" />
                    </div>
                    <div className={scss.card_info}>
                        <div className={scss.link_wrapper}>
                            <Link className={scss.link} to={"/"}>
                                На головну
                            </Link>
                        </div>

                        <div className={scss.form_container}>
                            <h2 className={scss.title}>{card.description.name}</h2>
                            <p className={scss.price}>{`${formattedPrice} грн`}</p>
                            <form className={scss.form} onSubmit={handleSubmit}>
                                <div className={scss.select_wrapper}>
                                    <select className={scss.select} onChange={onChange}>
                                        {select === "" && <option className={scss.select_text}>Виберіть розмір</option>}
                                        {options}
                                    </select>
                                </div>
                                <button className={scss.btn}>Забронювати</button>
                            </form>
                        </div>
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
                    </div>
                </div>
                <div className={scss.options_container}>
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
        </>
    );
};

export default CardTablet;