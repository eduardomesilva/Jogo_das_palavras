import "./Game.css";
// import StartScreen from "./StartScreen";


const Game = ( {
    verifyLetter,
    pickedword,
    pickdCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
} ) => {
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>

            </p>
            <h1>Advinhe a palavra</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickdCategory}...</span>
            </h3>
            <p>Você ainda tem {guesses} tentativas</p>
            <div className="wordContainer">
                {letters.map((letter, x) => 
                    guessedLetters.includes(letter) ? (
                    <span key={x} className="letter">
                        {letter}
                    </span>
                    ) : (
                        <span  key={x} className="blankSquare"></span>
                    )
                )}         
            </div>
            <div className="letterContainer">
                <p>Tente advinhas uma letra da palavra:</p>
                <form>
                    <input type="text" name="letter" maxLength= "1" required/>
                    <button>Jogar</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas</p>
                {wrongLetters.map((letter, x) => (
                    <span key= {x}>{letter}, </span>
                ) )}
            </div>
        </div>
    )
};

export default Game