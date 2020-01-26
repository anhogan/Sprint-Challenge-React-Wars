import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import NextButton from './components/NextButton';
import PreviousButton from './components/PreviousButton';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);
  console.log(films)

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/people/?page=1')
      .then(response => {
        setCharacters(response.data.results)
        setFilms(response.data.results)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, []);

  useEffect(() => {
    films.map((film) => {
      axios.get(film)
      .then(response => {
        console.log(response.data); 
        setFilms(response.data)})
        .catch(error => {
          console.log(error.message)})});
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard characters={characters} films={films}/>
      <NextButton />
      <PreviousButton />
    </div>
  );
}

export default App;
