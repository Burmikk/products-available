import scss from "./Door.module.scss";
const Door = ({ img, data }) => {
    // const avalibleDoorsStyle = !isAvalible ? scss.no_avalible ? ""
    const l8 = 0;
    const p8 = 5;
    const l9 = 2;
    const p9 = 0;

    // const result = data.map((item) => {
    //     return (
    //         <li>
    //             <p></p>
    //             <p></p>
    //             <p></p>
    //             <p></p>
    //             <p></p>
    //         </li>
    //     );
    // });
    return (
        <li className={scss.card}>
            <img className={scss.img} src={img} alt="door" />
            <h3 className={scss.title}>Крафт Муар Грей</h3>
            <p className={scss.size}>
                850 х 2030 / <span className={p8 === 0 ? scss.no_avalible : ""}>права ({p8})</span> / <span className={l8 === 0 ? scss.no_avalible : ""}>ліва ({l8})</span>
            </p>
            <p className={scss.size}>
                950 х 2030 / <span className={p9 === 0 ? scss.no_avalible : ""}>права ({p9})</span> / <span className={l9 === 0 ? scss.no_avalible : ""}>ліва ({l9})</span>
            </p>
            <button className={scss.btn}>Забронювати</button>
        </li>
    );
};
export default Door;
