import scss from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";

import MainRouter from "MainRouter";

const App = () => {
    return (
        <div>
            <NavBar />
            <MainRouter />
        </div>
    );
};

export default App;
