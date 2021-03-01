import React from 'react';

const Team = (props) => {
    const team = props.team;
    const totalSalary = team.reduce((total,singleSalary)=>total+singleSalary.salary,0)
    return (
        <div>
            <h1>Dream Team</h1>
            <h5>Team member: {team.length}</h5>
            <p>Total Budget: ${totalSalary}</p>
            <ol>
                {
                    team.map(team => <li>{team.name} &nbsp; <span>-</span> &nbsp;&nbsp; <small>Salary: ${team.salary}</small></li>)
                }
            </ol>
        </div>
    );
};

export default Team;