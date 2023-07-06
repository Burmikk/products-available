import NavBar from "./components/NavBar/NavBar";
import MainRouter from "MainRouter";
import Layout from "components/Layout/Layout";

const App = () => {
    return (
        <Layout>
            <NavBar />
            <MainRouter />
        </Layout>
    );
};

export default App;
