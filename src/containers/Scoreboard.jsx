import React from 'react';
import Stopwatch from '../components/Stopwatch';
import '../../css/app.css';

const INITIAL_STATE = {
  players:[
    {
      name: "Tyrion Lannister",
      score: 51,
      id: 100,
    },
    {
      name: "Jaime Lannister",
      score: 41,
      id: 101,
    },
    {
      name: "Cersei Lannister",
      score: 31,
      id: 102,
    },
    {
      name: "Daenerys Targaryen",
      score: 99,
      id: 103,
    },
    {
      name: "Jon Snow",
      score: 99,
      id: 104,
    },
    {
      name: "Petyr Baelish",
      score: 10,
      id: 105,
    },
    {
      name: "Jorah Mormont",
      score: 50,
      id: 106,
    },
    {
      name: "Sansa Stark",
      score: 40,
      id: 107,
    },
    {
      name: "Arya Stark",
      score: 80,
      id: 108,
    },
    {
      name: "Theon Greyjoy",
      score: 30,
      id: 109,
    },
    {
      name: "Bran Stark",
      score: 40,
      id: 110,
    },
    {
      name: "Sandor Clegane",
      score: 80,
      id: 111,
    }
  ]
};

var nextId = 112;

const Scoreboard = React.createClass({
  getInitialState: function(){
    return INITIAL_STATE;
  },
  onScoreChange: function(index,delta){
    this.state.players[index].score += delta;
    this.setState(this.state);
  },
  onAddPlayer: function(name){
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId,
    });
    this.setState(this.state);
    nextId += 1;
  },
  onRemovePlayer: function(index){
    this.state.players.splice(index,1);
    this.setState(this.state);
  },
  getDefaultProps:function(){
    return{
      title: "Scoreboard",
    }
  },
  render: function(){
    return(
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players}/>
        <div className="players">
          {this.state.players.map(function(player,index){
            return (
              <Player
                onScoreChange={function(delta){this.onScoreChange(index,delta)}.bind(this)}
                onRemove={function(){this.onRemovePlayer(index)}.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id} />
          );
        }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer}/>
      </div>
    );
  }
});

function Header(props){
  return(
    <div className="header">
      <Stats players={props.players}/>
      <h1>{props.title}</h1>
      <Stopwatch/>
    </div>
  );
};

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
};

function Stats(props){
  var totalPlayers = props.players.length;
  var totalPoints = props.players.reduce(function(total, player){
    return total + player.score;
  }, 0);
  return(
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  players: React.PropTypes.array.isRequired,
};

function Player(props){
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
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
};

function Counter(props){
  return(
    <div className="counter">
      <button className="counter-action decrement" onClick={function(){props.onChange(-1);}}> - </button>
      <div className="counter-score">
        {props.score}
      </div>
      <button className="counter-action increment" onClick={function(){props.onChange(1);}}> + </button>
    </div>
  );
};

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

const AddPlayerForm = React.createClass({
  propTypes:{
    onAdd: React.PropTypes.func.isRequired,
  },
  getInitialState: function(){
    return{
      name: "",
    };
  },
  onNameChange: function(e){
    this.setState({name: e.target.value})
  },
  onSubmit: function(e){
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({name: ""});
  },
  render: function(){
    return(
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    );
  }
});

export default Scoreboard;