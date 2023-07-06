import { fetchFilter } from "redux/filter/filter-operations";
import { fetchAllDoors } from "redux/doors/doors-operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Layout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilter());
        dispatch(fetchAllDoors());
    }, [dispatch]);
    return <>{children}</>;
};
export default Layout;
