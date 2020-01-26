import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import NextButton from './components/NextButton';
import PreviousButton from './components/PreviousButton';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [object, setObject] = useState([]);
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/people/?page=1')
      .then(response => {
        setObject(response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [nextPage, previousPage]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/?page=1')
      .then(response => {
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, []);

  function previousPage() {
    const previousURL = object.previous;
    console.log(previousURL);
    axios.get(previousURL)
      .then(response => {
        setObject(response.data)
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log(error.message)
      })
  };

  function nextPage() {
    const nextURL = object.next;
    console.log(nextURL);
    axios.get(nextURL)
      .then(response => {
        setObject(response.data)
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log(error.message)
      })
  };

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard characters={characters} />
      <PreviousButton previous={previousPage} />
      <NextButton next={nextPage} />
    </div>
  );
}

export default App;
