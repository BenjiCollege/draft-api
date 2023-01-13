import React from "react";

import { useState, useEffect } from "react";

import Routes from './containers/Routes';

const App = () => {

  // state to keep track of the beers to be displayed
  const [beers, setBeers] = useState([]);
  // state to keep track of changes in the filter section
  const [name, setName] = useState();
  const [abv, setAbv] = useState(false);
  const [isClassic, setIsClassic] = useState(false);
  const [ph, setPh] = useState(false);


  useEffect(() => {
    filterBeers();
  }, [name, abv, isClassic, ph]);

  // fetch data from API based on the filter functionality
  const filterBeers = () => {
    // search beers by a specific term inputed by used in search box
    const searchTermStr = name ? `&beer_name=${name}` : "";

    //search by alchool content
    const abvQueryStr = abv ? `&abv_gt=6` : "";

    //search for classic beers
    const classicFilterStr = isClassic ? `&brewed_before=01-2011` : "";

    //search by ph level
    const phQueryStr = ph ? `&ph_gt=4` : "";


    // general URL to get random beers
    const url = `https://api.punkapi.com/v2/beers?per_page=50${searchTermStr}${abvQueryStr}${classicFilterStr}${phQueryStr} `;
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
      })
  }


  return (
    <div className="App">
      <Routes
        beers={beers}
        filterBeers={filterBeers}
        setName={setName}
        setAbv={setAbv}
        abv={abv}
        setIsClassic={setIsClassic}
        isClassic={isClassic}
        name={name}
        ph={ph}
        setPh={setPh}
      />
    </div>
  );
}

export default App;