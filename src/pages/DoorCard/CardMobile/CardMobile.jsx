import scss from "./CardMobile.module.scss";
import ReserveForm from "shared/components/ReserveForm/ReserveForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDoorCard, selectShowForm } from "redux/doors/doors-selectors";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Select from "shared/components/Select/Select";

const CardMobile = ({ select, onChange, handleClickImg, bigImg, handleSubmit }) => {
    const card = useSelector(selectDoorCard);
    const isFormShow = useSelector(selectShowForm);

    const formattedPrice = card.door_model.retail_price.toLocaleString();

    return (
        <>
            {isFormShow && <ReserveForm isSelect={select} />}
            <div className={scss.card}>
                <div className={scss.card_wrapper}>
                    <div className={scss.link_wrapper}>
                        <Link className={scss.link} to={"/"}>
                            <BsArrowLeftCircle size={32} />
                        </Link>
                    </div>
                    <div className={scss.card_info}>
                        <div className={scss.form_container}>
                            <h2 className={scss.title}>{card.description.name}</h2>
                            <div className={scss.form_wrapper}>
                                <form className={scss.form}>
                                    <div className={scss.select_wrapper}>
                                        <Select select={select} onChange={onChange} />
                                    </div>
                                </form>
                                <p className={scss.price}>{`${formattedPrice} грн`}</p>
                            </div>
                        </div>
                    </div>
                    <div className={scss.img_box}>
                        <Swiper slidesPerView={1}>
                            <SwiperSlide>
                                <img className={scss.img} src={card.door_model.outside_image} alt="двері" />
                            </SwiperSlide>
                            {card.door_model.inside_image && (
                                <SwiperSlide>
                                    <img className={scss.img} src={card.door_model.inside_image} alt="двері" />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <button onClick={handleSubmit} className={scss.btn}>
                        Забронювати
                    </button>
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
            </div>
        </>
    );
};

export default CardMobile;
