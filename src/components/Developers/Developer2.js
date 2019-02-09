import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Developer2.css';

let members = [
  {
    name: "Neha Singla",
    imgLink: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Developers%2FNehaSingla.jpeg?alt=media&token=54659231-a753-4c1f-baee-c244207ff973",
    ph_no: 7404221321,
    fb: "https://www.facebook.com/neha.singla.315213",
    year: 4
  },
  {
    name: "Utkarsh Saxena",
    imgLink: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Developers%2FUtkarshSaxena.jpg?alt=media&token=dbdedaf4-e2c6-4f96-8f45-93dc07613f22",
    ph_no: 8171447973,
    fb: "https://www.facebook.com/utkarsh.saxena.773",
    year: 4
  },
  { 
    name: "Ankur", 
    imgLink: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Developers%2FAnkur%20Charan.png?alt=media&token=c1513246-65b1-4681-82de-ea751ce1823d", 
    ph_no: 9468184831, 
    github: "https://www.github.com/ankurcharan",
    fb: "https://www.facebook.com/ankurcharan06",
    year: 3
  },
  {
    name: "Mudit Jain",
    imgLink: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Developers%2FMuditJain.jpg?alt=media&token=baa7590f-1b3f-49a0-8458-e5ab91de16eb",
    ph_no: 7206307664,
    github: "https://www.github.com/ciphereck",
    fb: "https://www.facebook.com/ciphereck",
    year: 3
  },
  {
    name: "Yash Shukla",
    imgLink: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Developers%2FYash%20Shukla.jpg?alt=media&token=d38ff104-e5a5-4c5d-b1c7-cd128990753c",
    ph_no: 7206268094,
    github: "https://github.com/shuklayash",
    fb: "https://www.facebook.com/profile.php?id=100013850499403",
    year: 3
  },
  { 
    name: "Rajat Garg", 
    imgLink: 'https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Developers%2FRajat%20Garg.jpeg?alt=media&token=8009a725-96ef-414e-829a-011fb37c1db0', 
    ph_no: 9729921461, 
    github: "https://www.github.com/rajat7630",
    year: 2
  },
  { 
    name: "Reshov", 
    imgLink: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Developers%2FReshov%20Roy.jpg?alt=media&token=babb80c8-5fd7-404f-babc-e688142f61d0",
    ph_no: 8794252995, 
    github: "https://www.github.com/reshovroy",
    year: 2 
  },
  {
    name: "Karunam Goyal", 
    imgLink: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Developers%2FKarunam%20Goyal.jpeg?alt=media&token=ec54f3f9-acac-459a-9b15-f3079301d0b4", 
    ph_no: 8053144053, 
    github: "https://github.com/karunamgoyal",
    year: 2
  },
  { 
    name: "Nikhil", 
    imgLink: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Developers%2FNikhil%20Gupta.jpeg?alt=media&token=17870fc3-0a41-47f8-9ba8-b88b2dfed033", 
    ph_no: 9729720989, 
    github: "https://www.github.com/nick-infinity",
    year: 2
  }
]
class TeamConflu extends Component {

  componentDidMount() {
    setTimeout(function () {
      let x = document.getElementById('loader'); 
      if(x) {
        x.remove();
      }      
      document.getElementById('root').classList.remove('hide');
    }, 1000);
  }
  
  render() {

    return (
      <div className="dev_confluence">
        <h2 className="dev_heading">
        <Link to='/'>
        <a class="btn-floating btn-small waves-effect back" href="#!"><i class="material-icons">arrow_back</i></a>
        </Link>
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
                        <img src={el.imgLink} alt="profile" />
                      </div>
                    </div>
                    <div className="person_info">
                      <div className="person_name">{el.name}</div>
                      <div className="person_contact">{el.ph_no}</div>
                    </div>
                    <div className="person_social">


                    {
                        (el.fb && el.fb.length > 0) ?  
                        (
                          <a href={el.fb} className="person_btn person_facebook" target='_blank'  rel="noopener noreferrer">facebook</a>
                        ) : (
                          ''
                        )
                      }

                      {
                        (el.github && el.github.length > 0) ?
                        (
                          <a href={el.github} className="person_btn person_github" target='_blank'  rel="noopener noreferrer">github</a>
                        ) : (
                          ''
                        )
                      }  
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
