import scss from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Filter from "./components/Filter/Filter";
const App = () => {
    return (
        <div className={scss.container}>
            <NavBar />
            <h2 className={scss.title}>Залишки дверей на складі</h2>
            <Filter />
        </div>
    );
};

export default App;
