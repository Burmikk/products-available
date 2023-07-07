import { Link } from "react-router-dom";
import scss from "./Door.module.scss";
import { useDispatch } from "react-redux";
import { showReserve } from "redux/doors/doors-slice";
import { setFormValue } from "redux/doors/doors-slice";

const Door = ({ door }) => {
    const dispatch = useDispatch();
    const name = `${door.collection.name} ${door.door_model.name}`;
    const cardData = {
        image: door.door_model.outside_image,
        name,
        id: door.id,
        price: door.door_model.retail_price,
        sizes: [
            {
                name: "left_8",
                quantity: door.left_8,
                text: "850 х 2030 / ліва",
            },
            {
                name: "right_8",
                quantity: door.right_8,
                text: "850 х 2030 / права",
            },
            {
                name: "left_9",
                quantity: door.left_9,
                text: "950 х 2030 / ліва",
            },
            {
                name: "right_9",
                quantity: door.right_9,
                text: "950 х 2030 / права",
            },
        ],
    };

    const handleShowForm = () => {
        dispatch(setFormValue(cardData));
        dispatch(showReserve(true));
    };

    const formattedPrice = cardData.price.toLocaleString();

    return (
        <>
            <li className={scss.card}>
                <Link to={`/${door.id}`}>
                    <img className={scss.img} src={cardData.image} alt="door" />
                    <h3 className={scss.title}>{name}</h3>
                </Link>
                <p className={scss.size}>
                    850 х 2030 /
                    <span className={door.right_8 === 0 ? scss.no_avalible : ""}>права ({door.right_8})</span> /
                    <span className={door.left_8 === 0 ? scss.no_avalible : ""}>ліва ({door.left_8})</span>
                </p>
                <p className={scss.size}>
                    950 х 2030 /
                    <span className={door.right_9 === 0 ? scss.no_avalible : ""}>права ({door.right_9})</span> /
                    <span className={door.left_9 === 0 ? scss.no_avalible : ""}>ліва ({door.left_9})</span>
                </p>
                <p className={scss.price}>{`${formattedPrice} грн`}</p>
                <button onClick={handleShowForm} className={scss.btn}>
                    Забронювати
                </button>
            </li>
        </>
    );
};

export default Door;
