import './App.css';

import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

// components
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  {id: 3, name: 'end' }
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickdWord, setPickedWord] = useState("")
  const [pickdCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickdWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }

  const startGame = () => {
    const {word, category} = pickdWordAndCategory()
    console.log(word, category)
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((x) => x.toLowerCase())

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)


  }


  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }


  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' &&( 
        <Game verifyLetter={verifyLetter} 
          pickdWord={pickdWord} 
          pickdCategory={pickdCategory} 
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score} 

        />
      )}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
