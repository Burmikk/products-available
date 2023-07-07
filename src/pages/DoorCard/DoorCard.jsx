import { useEffect, useState } from "react";
// import scss from "./DoorCard.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoorCard } from "redux/doors/doors-operations";
import { selectDoorCard, selectFormValue, selectShowForm } from "redux/doors/doors-selectors";
import { showReserve, setFormValue, clearDoorCard, clearFormValue } from "redux/doors/doors-slice";
import CardDesktop from "./CardDesktop/CardDesktop";

const DoorCard = () => {
    const card = useSelector(selectDoorCard);
    const formValue = useSelector(selectFormValue);
    const isFormShow = useSelector(selectShowForm);

    const params = useParams();
    const dispatch = useDispatch();

    const [select, setSelect] = useState("");
    const [bigImg, setBigImg] = useState(null);

    useEffect(() => {
        dispatch(fetchDoorCard(params.doorId));
        return () => {
            dispatch(clearDoorCard());
            dispatch(clearFormValue());
        };
    }, [dispatch, params.doorId]);

    useEffect(() => {
        if (card) {
            const cardData = {
                image: card.door_model.outside_image,
                name: card.description.name,
                id: card.id,
                price: card.door_model.retail_price,
                sizes: [
                    {
                        name: "left_8",
                        quantity: card.left_8,
                        text: "850 х 2030 / ліва",
                    },
                    {
                        name: "right_8",
                        quantity: card.right_8,
                        text: "850 х 2030 / права",
                    },
                    {
                        name: "left_9",
                        quantity: card.left_9,
                        text: "950 х 2030 / ліва",
                    },
                    {
                        name: "right_9",
                        quantity: card.right_9,
                        text: "950 х 2030 / права",
                    },
                ],
            };
            dispatch(setFormValue(cardData));
        }
    }, [dispatch, card]);

    const handleSelect = (e) => {
        const { value } = e.target;
        setSelect(value);
    };

    const handleClickImg = (src) => {
        setBigImg(src);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(showReserve(!isFormShow));
    };
    if (card && formValue) {
        return (
            <>
                <CardDesktop
                    select={select}
                    onChange={handleSelect}
                    handleClickImg={handleClickImg}
                    bigImg={bigImg}
                    handleSubmit={handleSubmit}
                />
            </>
        );
    }
};

export default DoorCard;
