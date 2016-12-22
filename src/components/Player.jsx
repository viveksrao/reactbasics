import React, { PropTypes } from 'react';
import Counter from './Counter';

// Pure Component
const Player = props => {
  return(
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}>
          ✘
        </a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange}/>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Player;
