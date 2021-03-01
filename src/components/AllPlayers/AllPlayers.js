import React from 'react';
import './AllPlayers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faFlag,faFutbol,faMoneyCheckAlt, faTshirt } from '@fortawesome/free-solid-svg-icons'

const AllPlayers = (props) => {
    const {img,name,jersey,country,club,salary} =props.player;
    return (
        <div className="player">
            <div className="player-img">
                <img src={img} alt="" />
            </div>
            <div className="player-des">
                <h3>{name}</h3>
                <p><FontAwesomeIcon icon={faTshirt}/> Jersey No: {jersey}</p>
                <p><FontAwesomeIcon icon={faFlag}/> Country: {country}</p>
                <p><FontAwesomeIcon icon={faFutbol}/> Club: {club}</p>
                <p><FontAwesomeIcon icon={faMoneyCheckAlt}/> Salary: ${salary}</p>
            </div>
            <div>
                <button onClick={()=>props.handleAddPlayer(props.player)} className="btn btn-danger"><FontAwesomeIcon icon={faUserPlus} /> Add to team</button>
            </div>
        </div>
    );
};

export default AllPlayers;