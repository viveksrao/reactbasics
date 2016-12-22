// Container Component
import React, { Component } from 'react';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';
import '../../css/app.css';

export default class Scoreboard extends Component{

  state = {
    players:[
      {
        name: "Tyrion Lannister",
        score: 51
      },
      {
        name: "Jaime Lannister",
        score: 41
      },
      {
        name: "Cersei Lannister",
        score: 31
      },
      {
        name: "Daenerys Targaryen",
        score: 99
      },
      {
        name: "Jon Snow",
        score: 99
      },
      {
        name: "Petyr Baelish",
        score: 10
      },
      {
        name: "Jorah Mormont",
        score: 50
      },
      {
        name: "Sansa Stark",
        score: 40
      },
      {
        name: "Arya Stark",
        score: 80
      },
      {
        name: "Theon Greyjoy",
        score: 30
      },
      {
        name: "Bran Stark",
        score: 40
      },
      {
        name: "Sandor Clegane",
        score: 80
      }
    ]
  };

  onScoreChange = (index,delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  onAddPlayer = (name) => {
    this.state.players.push({
      name: name,
      score: 0
    });
    this.setState(this.state);
  };

  onRemovePlayer = (index) => {
    this.state.players.splice(index,1);
    this.setState(this.state);
  };

  render(){
    return(
      <div className="scoreboard">
        <Header players={this.state.players}/>
        <div className="players">
          {this.state.players.map(function(player,index){
            return (
              <Player
                name={player.name}
                score={player.score}
                key={player.name}
                onScoreChange={(delta) => this.onScoreChange(index,delta)}
                onRemove={() => this.onRemovePlayer(index)}
              />
          );
        }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer}/>
      </div>
    );
  }
}
