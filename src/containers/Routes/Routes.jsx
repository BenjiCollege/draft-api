import React from 'react';

import Dashboard from '../Dashboard';

const Routes = (props) => {
    const { filterBeers, beers, setName, setIsClassic, setAbv, isClassic, abv, name, ph, setPh} = props;

    return (

    <div>
        <Dashboard path="/" 
            filterBeers={filterBeers}
            setName={setName}
            setAbv={setAbv}
            setIsClassic={setIsClassic}
            beers={beers}
            isClassic={isClassic}
            abv={abv}
            name={name}
            ph={ph}
            setPh={setPh}
        />
    </div>
    )
}

export default Routes



