import scss from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Filter from "./components/Filter/Filter";
import DoorsList from "components/DoorsList/DoorsList";
import Layout from "components/Layout/Layout";

const App = () => {
    return (
        <Layout>
            <div className={scss.container}>
                <NavBar />
                <main className={scss.main}>
                    <Filter />
                    <DoorsList />
                </main>
            </div>
        </Layout>
    );
};

export default App;
