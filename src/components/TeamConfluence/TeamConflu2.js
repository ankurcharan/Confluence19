import React, { Component } from 'react';

import './TeamConflu2.css';


class TeamConflu extends Component {
  render() {
    return (
      <div className="team_confluence">
        <h2 className="team_heading"><div className="team_text">Team Confluence</div></h2>
        <div className="team_wrapper">
          <div className="team_card_plate row">
            {
              Array(10).fill(0).map((el, i) => {
                return (
                  <div className="col l3 m4 s6 person_card" key={i}>
                    <div className="back_plate">
                      <div className="person_img">
                        <img src={window.location.origin + '/img/user-4.jpg'} alt="image" />
                      </div>
                    </div>
                    <div className="person_info">
                      <div className="person_name">Peter Gupta</div>
                      <div className="person_contact">9898989898</div>
                    </div>
                    <div className="person_social">
                      <a className="person_btn person_facebook">facebook</a>
                      <a className="person_btn person_gmail">gmail</a>
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
