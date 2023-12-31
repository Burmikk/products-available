import { Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import DoorCard from "pages/DoorCard/DoorCard";
import scss from "./App.module.scss";

const MainRouter = () => {
    return (
        <main className={scss.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:doorId" element={<DoorCard />} />
            </Routes>
        </main>
    );
};
export default MainRouter;
