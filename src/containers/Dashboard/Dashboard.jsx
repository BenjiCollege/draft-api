import React from 'react';
import styles from './Dashboard.module.scss'
import SideBar from '../../components/SideBar';
import CardList from '../../components/CardList';



const Dashboard = (props) => {
    const { filterBeers, beers, setName, setAbv, setIsClassic, isClassic, abv, name } = props;

// import image in the component



    return (
        <div className={styles.dashboard}>
            <SideBar
                filterBeers={filterBeers}
                setName={setName}
                setAbv={setAbv}
                setIsClassic={setIsClassic}
                isClassic={isClassic}
                abv={abv}
                name={name}
            />
            <CardList beers={beers} />
        </div>
    )
}

export default Dashboard
