import { Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import DoorCard from "pages/Home/DoorCard/DoorCard";
import Layout from "components/Layout/Layout";
import scss from "./App.module.scss";

const MainRouter = () => {
    return (
        <Layout>
            <main className={scss.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:doorId" element={<DoorCard />} />
                </Routes>
            </main>
        </Layout>
    );
};
export default MainRouter;
