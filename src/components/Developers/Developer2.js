import React, { Component } from 'react';

import './Developer2.css';


class TeamConflu extends Component {
  render() {
    const members = [
      { name: "Ankur", imgLink: '', ph_no: 9898989898, github: "www.github.com/ankurcharan" },
      { name: "Nikhil", imgLink: '', ph_no: 9729720989, github: "www.github.com/nick-infinity" },
      { name: "Reshov", imgLink: '', ph_no: 8794252995, github: "www.github.com/reshovroy" },
      { name: "Kushagra", imgLink: '', ph_no: 9898989898, github: "www.github.com/ankurcharan" },
      { name: "Rajat", imgLink: '', ph_no: 9898989898, github: "www.github.com/ankurcharan" },
    ]
    return (
      <div className="dev_confluence">
        <h2 className="dev_heading">
        <a class="btn-floating btn-small waves-effect back" href="/"><i class="material-icons">arrow_back</i></a>
          <img src={window.location.origin + '/img/devlopers.svg'} alt="team_logo" />
        </h2>
        <div className="dev_wrapper">
          <div className="dev_card_plate row">
            {
              members.map((el, i) => {
                return (
                  <div className="col l3 m4 s6 person_card" key={i}>
                    <div className="back_plate">
                      <div className="person_img">
                        <img src={window.location.origin + '/img/user-4.jpg'} alt="image" />
                      </div>
                    </div>
                    <div className="person_info">
                      <div className="person_name">{el.name}</div>
                      <div className="person_contact">{el.ph_no}</div>
                    </div>
                    <div className="person_social">
                      <a className="person_btn person_github">github</a>

                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TeamConflu;
