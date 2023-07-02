import { useEffect } from "react";
import { fetchFilter } from "redux/filter/filter-operations";
import { fetchAllDoors } from "redux/doors/doors-operations";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilter());
        dispatch(fetchAllDoors());
    }, [dispatch]);

    return <>{children}</>;
};
export default Layout;
