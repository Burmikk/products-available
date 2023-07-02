import { useEffect, useState } from "react";
import { getDoorCard } from "shared/api/fetchDoors";
import scss from "./DoorCard.module.scss";
import { Link, useParams } from "react-router-dom";

const DoorCard = () => {
    const [card, setCard] = useState();
    const params = useParams();
    useEffect(() => {
        const fetchCard = async () => {
            try {
                const { data } = await getDoorCard(params.doorId);
                setCard(data);
            } catch (error) {}
        };
        fetchCard();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    if (card) {
        const formattedPrice = card.door_model.retail_price.toLocaleString();
        return (
            <div className={scss.card}>
                <Link className={scss.link} to={"/"}>
                    На головну
                </Link>
                <div className={scss.card_wrapper}>
                    <div className={scss.img_box}>
                        <img className={scss.img} src={card.door_model.outside_image} alt="" />
                    </div>
                    <div className={scss.card_info}>
                        <div>
                            <h2 className={scss.title}>Крафт Муар Грей</h2>
                            <p className={scss.price}>{`${formattedPrice} грн`}</p>
                            <form className={scss.form} onSubmit={handleSubmit}>
                                <div className={scss.select_wrapper}>
                                    <select className={scss.select}>
                                        <option className={scss.select_text}>850 х 2030 / права</option>
                                        <option className={scss.select_text}>850 х 2030 / ліва</option>
                                        <option className={scss.select_text}>950 х 2030 / права</option>
                                        <option className={scss.select_text}>950 х 2030 / ліва</option>
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
        );
    }
};

export default DoorCard;
