import NavBar from "./components/NavBar/NavBar";
import MainRouter from "MainRouter";
import Footer from "components/Footer/Footer";
import Layout from "components/Layout/Layout";

const App = () => {
    return (
        // <Layout>
        <>
            <NavBar />
            <MainRouter />
            <Footer />
        </>
        // </Layout>
    );
};

export default App;
