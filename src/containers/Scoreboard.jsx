// Container Component
import React from 'react';
import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Stats from '../components/Stats';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';
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

export default Scoreboard;
