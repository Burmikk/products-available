import { useEffect } from "react";
import { fetchFilter } from "redux/filter/filter-operations";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilter());
    }, []);

    return <>{children}</>;
};
export default Layout;
