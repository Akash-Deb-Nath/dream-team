import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/playerData.json';
import AllPlayers from '../AllPlayers/AllPlayers';
import Team from '../Team/Team';
import './Player.css';

const Player = (props) => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(fakeData);
    }, [])
    const [team,setTeam] = useState([]);
    const handleAddPlayer = (player) => {
        const newTeam = [...team,player];
        setTeam(newTeam);
    }
    return (
        <div className="team-container">
            <div className="all-players-container">
                {
                    players.map(player => <AllPlayers player={player} handleAddPlayer={handleAddPlayer} key={player.id}></AllPlayers> )
                }
            </div>
            <div className="selected-players-container">
                <Team team={team}></Team>
            </div>
        </div>
    );
};

export default Player;