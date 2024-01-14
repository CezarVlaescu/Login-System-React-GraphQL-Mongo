import './Result.css';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/authContext'; 


const Result = ({ totalQuestions, result, onTryAgain }) => {
    const { user } = useContext(AuthContext);
    const [highScores, setHighScores] = useState([]);
    const [showScores, setShowScores] = useState(false);

    useEffect(() => {
        const storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
        setHighScores(storedHighScores);
    }, []);

    const handleSave = () => {

        if (!user) {
            console.error("User is not defined");
            return;
        }
        
        const newScore = {
            name: user.email, 
            score: result.score
        };

        const newHighScores = [...highScores, newScore]
          .sort((a, b) => b.score - a.score); 
        setHighScores(newHighScores);
        setShowScores(true);
        localStorage.setItem('highScores', JSON.stringify(newHighScores));
    };

    const handleTryAgain = () => {
        setShowScores(false);
        onTryAgain();
    };

    return (
        <div className="result">
            <h3>Result</h3>
            <p>
                Total Questions: <span>{totalQuestions}</span>
            </p>
            <p>
                Total Score: <span>{result.score}</span>
            </p>
            <p>
                Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
                Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>

            {!showScores && (
                <>
                    <button onClick={handleTryAgain}>Try Again</button>
                    <button onClick={handleSave}>Save Score</button>
                </>
            )}

            {showScores && (
                <table>
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {highScores.map((score, index) => (
                            <tr key={`${score.score}-${score.name}-${index}`}>
                                <td>{index + 1}</td>
                                <td>{score.name}</td>
                                <td>{score.score}</td>
                            </tr>
                        ))}
                        <button className='resultButton' onClick={handleTryAgain}>Try Again</button>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Result;

