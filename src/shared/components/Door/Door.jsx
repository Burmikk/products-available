import scss from "./Door.module.scss";
const Door = ({ img, name, model, left8, left9, right8, right9 }) => {
    return (
        <li className={scss.card}>
            <img className={scss.img} src={img} alt="door" />
            <h3 className={scss.title}>
                {name} {model}
            </h3>
            <p className={scss.size}>
                850 х 2030 /<span className={right8 === 0 ? scss.no_avalible : ""}>права ({right8})</span> /
                <span className={left8 === 0 ? scss.no_avalible : ""}>ліва ({left8})</span>
            </p>
            <p className={scss.size}>
                950 х 2030 / <span className={right9 === 0 ? scss.no_avalible : ""}>права ({right9})</span> /
                <span className={left9 === 0 ? scss.no_avalible : ""}>ліва ({left9})</span>
            </p>
            <button className={scss.btn}>Забронювати</button>
        </li>
    );
};
export default Door;
