import scss from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Filter from "./components/Filter/Filter";
import DoorsList from "components/DoorsList/DoorsList";
import { useState, useEffect } from "react";
import { getAllDoors } from "shared/api/fetchDoors";
import Layout from "components/Layout/Layout";

const App = () => {
    const [showFilter, setShowFilter] = useState();
    const [doors, setDoors] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchDoors = async () => {
            try {
                const { data } = await getAllDoors();
                setDoors(data.results);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchDoors();
    }, []);

    const handleFilter = (data) => {
        if (!data) {
            return;
        }
        if (data.length) {
            setDoors(data);
            setNotFound(false);
        }
        if (data.length === 0) {
            setNotFound(true);
        }
    };

    const filterStatus = (result) => {
        setShowFilter(result);
    };
    return (
        <Layout>
            <div className={scss.container}>
                <NavBar filterStatus={filterStatus} />
                <main className={scss.main}>
                    <Filter showFilter={showFilter} filterResult={handleFilter} />
                    {!notFound ? (
                        <DoorsList doors={doors} />
                    ) : (
                        <div className={scss.not_found}>
                            <h2 className={scss.text}> Нажаль, у наявності зараз нічого немає за вашим запитом</h2>
                        </div>
                    )}
                </main>
            </div>
        </Layout>
    );
};

export default App;
