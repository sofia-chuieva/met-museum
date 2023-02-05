import React, { useEffect, useState} from 'react';
import './App.css';
import Search from './SearchBar/Search';
import CardGrid from './CardGrid/CardGrid';

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('lion');

  useEffect(() => {
    const getArt = async () => {
      const objectsResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=${query}`)
      let objectsResponseJson = await objectsResponse.json();
      let collection = await Promise.all(
        objectsResponseJson.objectIDs.map(async id => {
          let response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
          return response.json()
        })
      )
      setItems(collection)
      console.log(collection)
    }
    getArt();
  }, [query])  //only on query
  
  return (
    <div className="App">
      <Search getQuery={(query) => setQuery(query)}/>
      <div className="hero">
        <h1>Museum's highlights of <span className="query">{query}  </span></h1>
      </div>
      <CardGrid items={items} />
    </div>
  
  );
}

export default App;
