import questions from './questions';

const Game = ({ step, question, onClickVariant }) => {
  const procentag = Math.round((step / questions.length) * 100);

  return (
    <div className="result">
      <div className="resultWrapper">
        <div className="progress">
          <div
            style={{ width: `${procentag}%`, transition: '0.4s' }}
            className="progressGreen"
          ></div>
        </div>
        <h2>{question.title}</h2>
        <ul>
          {question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={index}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
