import {ScoreContainer, Replay} from './ScorePage.styles';
import PropTypes from 'prop-types';

const ScorePage = (prop) => {
  return (
    <ScoreContainer>
      Great gob your score is {prop.score} out of 100
      <Replay onClick={prop.onClick}>Replay</Replay>
      </ScoreContainer>
  )
}

ScorePage.propTypes = {
  score: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}
export default ScorePage