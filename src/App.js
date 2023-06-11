import scss from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Filter from "./components/Filter/Filter";
import DoorsList from "components/DoorsList/DoorsList";
import { useState } from "react";
const App = () => {
    const [showFilter, setShowFilter] = useState();

    const filterStatus = (result) => {
        setShowFilter(result);
    };

    return (
        <div className={scss.container}>
            <NavBar filterStatus={filterStatus} />
            <main className={scss.main}>
                <Filter showFilter={showFilter} />
                <DoorsList />
            </main>
        </div>
    );
};

export default App;
