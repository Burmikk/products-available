import { Link, useLocation } from "react-router-dom";
import scss from "./Door.module.scss";
const Door = ({ door }) => {
    return (
        <li className={scss.card}>
            <Link to={`/${door.id}`}>
                <img className={scss.img} src={door.door_model.outside_image} alt="door" />
                <h3 className={scss.title}>
                    {door.collection.name} {door.door_model.name}
                </h3>
            </Link>
            <p className={scss.size}>
                850 х 2030 /<span className={door.right_8 === 0 ? scss.no_avalible : ""}>права ({door.right_8})</span> /
                <span className={door.left_8 === 0 ? scss.no_avalible : ""}>ліва ({door.left_8})</span>
            </p>
            <p className={scss.size}>
                950 х 2030 / <span className={door.right_9 === 0 ? scss.no_avalible : ""}>права ({door.right_9})</span>{" "}
                /<span className={door.left_9 === 0 ? scss.no_avalible : ""}>ліва ({door.left_9})</span>
            </p>
            <button className={scss.btn}>Забронювати</button>
        </li>
    );
};
export default Door;
