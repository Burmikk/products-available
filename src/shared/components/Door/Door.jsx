const Door = ({ img, data }) => {
    const result = data.map((item) => {
        return (
            <li>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </li>
        );
    });
    return (
        <div>
            <img src={img} alt="door picture" />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};
export default Door;
