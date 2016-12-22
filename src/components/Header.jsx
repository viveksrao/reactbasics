import React, { PropTypes } from 'react';
import Stopwatch from './Stopwatch';
import Stats from './Stats';

// Pure Component
const Header = props => {
  return(
    <div className="header">
      <Stats players={props.players}/>
      <h1>Scoreboard</h1>
      <Stopwatch/>
    </div>
  );
};

Header.propTypes = {
  players: PropTypes.array.isRequired
};

export default Header;
