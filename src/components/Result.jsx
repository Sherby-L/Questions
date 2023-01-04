import image from '../components/img/kot.jpg';
import questions from './questions';

const Result = ({ correct }) => {
  return (
    <div className="result">
      <div className="resultWrapper">
        <img alt="kot" src={image} className="imgKot" />
        <h2>
          {`Вы отгадали ${correct} ${
            correct < 1 || correct > 4
              ? 'ответов'
              : correct === 1
              ? 'ответ'
              : 'ответa'
          } из ${questions.length} `}
        </h2>
        <a href="/">
          <button className="button">Попробовать снова</button>
        </a>
      </div>
    </div>
  );
};

export default Result;
