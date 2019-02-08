import React, { Component } from 'react';
import './TeamConflu2.css';
import { Link } from 'react-router-dom';


const convener = [
         
	{
		name: "Manish Kumar",
		fb: "https://m.facebook.com/manishyadav2904",
		email: "yadavmanish2904@gmail.com",
		contact: "9050282706",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BManish%20Kumar%7D.jpg?alt=media&token=0506786d-bf57-48a0-8f93-df324a02efcb"	
	},
	{
		name: "Saurabh Jain",
		fb: "https://www.facebook.com/profile.php?id=100001281323244",
		email: "saurabhjain.nitkkr@gmail.com",
		contact: "8683050753",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BSaurabh%20Jain%7D.jpg?alt=media&token=c9aa2151-71b2-413b-8b35-2087a66201b2"	
	},
	{
		name: "Amit Chattopadhyay",
		fb: "https://m.facebook.com/profile.php?lst=100002167239505%3A100002167239505%3A1547115558&fref=nf&pn_ref=story",
		email: "cosmosamit18@gmail.com",
		contact: "7206229387",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BAmit%20Chattopadhyay%7D.jpg?alt=media&token=a6b9fb16-df3c-403d-8b0d-b05d959a56f5"	
	},
	{
		name: "Sourav Aggarwal",
		fb: "",
		email: "",
		contact: "",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BSourav%20Aggarwal%7D.jpg?alt=media&token=4885e8d7-3dc4-4637-9da0-e1d02fec40aa"	
	},
	{
		name: "Saloni Tapan",
		fb: "https://m.facebook.com/saloni.tapan",
		email: "tapansaloni@gmail.com",
		contact: "9521429296",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BSaloni%20Tapan%7D.jpg?alt=media&token=600cde46-502f-4543-ba1d-96326600ba14"	
	},
	{
		name: "Anmol D Gupta",
		fb: "https://www.facebook.com/anmolart123",
		email: "anmold21819@gmail.com",
		contact: "8607565232",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BAnmol%20D%20Gupta%7D.jpg?alt=media&token=a5302ccc-f227-4c65-a242-787b45c551f6"	
	},
	{
		name: "Kareenah Singh",
		fb: "",
		email: "",
		contact: "",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BKareenah%20Singh%7D.jpg?alt=media&token=7cd746ae-f7a9-42d5-912b-6f8f9ee010bc"	
	},
	{
		name: "Shivangi Kapur",
		fb: "",
		email: "",
		contact: "",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BShivangi%20Kapur%7D.png?alt=media&token=5655efd1-9b57-4501-b2f3-9c92149dcf99"	
	},
	{
		name: "Prince Chandel",
		fb: "https://www.facebook.com/prince.chandel.56808",
		email: "",
		contact: "8053059292",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BPrince%20Chandel%7D%20(2).jpg?alt=media&token=d79e796d-fb46-4351-b48a-0503c64484aa"	
	},
	{
		name: "Udashey Goyal",
		fb: "https://www.facebook.com/udashey.goel",
		email: "udasheyjind@gmail.com",
		contact: "8950300341",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BUdashey%20Goyal%7D.jpg?alt=media&token=5afeb5b1-3bbd-4b3d-a68c-887254bdd749"	
	},
	{
		name: "Harjot Parmar",
		fb: "",
		email: "harjotparmar0922@gmail.com",
		contact: "7206036309",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BHarjot%20Parmar%7D.jpg?alt=media&token=ca286d9f-2402-4367-9629-f2249721bb2d"	
	},
	{
		name: "Shubhankar Prasad",
		fb: "https://m.facebook.com/spd831",
		email: "shubhankarprasad2015@gmail.com",
		contact: "8607067687",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BShubhankar%20Prasad%7D.png?alt=media&token=df8fb0ee-dd2c-4ac5-aa0d-b8317d619357"	
	},
	{
		name: "Hardeep Singh",
		fb: "https://www.facebook.com/hardeepsingh664",
		email: "hardeepsingh664@gmail.com",
		contact: "8504864001",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BHardeep%20Singh%7D.jpg?alt=media&token=4736c80a-70f4-454f-b6e8-a489e6fbb805"	
	},
	{
		name: "Puneet Jain",
		fb: "",
		email: "",
		contact: "",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BPuneet%20Jain%7D.jpg?alt=media&token=e1b92052-0523-4ee4-8785-39802d2bf119"	
	},
	{
		name: "Sanjeev Yadav",
		fb: "",
		email: "sanjeevyadav1996@gmail.com",
		contact: "9996639725",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BSanjeev%20Yadav%7D.jpg?alt=media&token=ef71fa8f-eccf-4d43-ab48-7d2f89cd7de4"	
	},
	{
		name: "Mankiran Kaur",
		fb: "https://m.facebook.com/mankiran.kaur.37",
		email: "mankiran29@gmail.com",
		contact: "8901401074",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BMankiran%20Kaur%7D.jpg?alt=media&token=334bc977-4379-4196-b4a5-5b0fcb295346"	
	},
	{
		name: "Rishabh Agarwal",
		fb: "https://m.facebook.com/ndn.rishabh?ref=bookmarks",
		email: "ndn.rishabh1997@gmail.com",
		contact: "7206228993",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BRishabh%20Agarwal%7D.jpg?alt=media&token=c228e307-cac5-47db-b853-870ae4655355"	
	},
	{
		name: "Manan Jain",
		fb: "https://m.facebook.com/manan.jain.374549",
		email: "mananjen@gmail.com",
		contact: "8295053791",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BManan%20Jain%7D.jpg?alt=media&token=282c92c5-8b47-461e-acf8-af4584fbe065"	
	},
	{
		name: "Pranil Mittal",
		fb: "https://www.facebook.com/pranilpmb",
		email: "pranilmittal@gmail.com",
		contact: "8006742565",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BPranil%20Mittal%7D.jpg?alt=media&token=eca0d3f8-fb4a-420c-8711-662eb633c881"	
	},
	{
		name: "Naina Gupta",
		fb: "https://www.facebook.com/naina.gupta.353250",
		email: "nainagupta434@gmail.com",
		contact: "880093066",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BNaina%20Gupta%7D.jpg?alt=media&token=3b186610-d370-4ca3-819f-d48122387ea4"	
	},
	{
		name: "Yogender Yadav",
		fb: "https://www.facebook.com/Yoginess.20",
		email: "yogender105@gmail.com",
		contact: "9467644918",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BYogender%20Yadav%7D.jpg?alt=media&token=1e95c471-bd38-4dac-9004-6f060207481c"	
	},
	{
		name: "Aastha Chawla",
		fb: "https://www.facebook.com/aastha.chawla.583",
		email: "aasthachawla1997@gmail.com",
		contact: "9996406560",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BAastha%20Chawla%7D.jpg?alt=media&token=b3441165-0171-4b4b-bad7-988b9a4d44a8"	
	},
	{
		name: "Himanshu Gambhir",
		fb: "",
		email: "himanshugam.97@gmail.com",
		contact: "9971594360",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BHimanshu%20Gambhir%7D.jpg?alt=media&token=057502e0-cc9c-4bbc-9de5-3d2c10e0bc48"	
	},
	{
		name: "Harshita Tomar",
		fb: "https://m.facebook.com/harshita.tomar.94?ref=bookmarks",
		email: "hrshttomar25@gmail.com",
		contact: "7495020809",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BHarshita%20Tomar%7D.jpg?alt=media&token=1992dba1-171b-4c0a-83f5-b85f970cf8bf"	
	},
	{
		name: "Sanket Duhoon",
		fb: "https://facebook.com/sanket.duhoon",
		email: "sanketkkr@gmail.com",
		contact: "8901133590",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BSanket%20Duhoon%7D.jpg?alt=media&token=39ff332e-c629-4234-993c-ce171b5765bc"	
	},
	{
		name: "Shubham Yadav",
		fb: "https://www.facebook.com/profile.php?id=100002514258917",
		email: "yadav2104rao@gmail.com",
		contact: "9729199884",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BShubham%20Yadav%7D.jpg?alt=media&token=8b359399-3b17-4a19-bf01-7d16fb657520"	
	},
	{
		name: "Ekta Dogra",
		fb: "https://m.facebook.com/ekta.dogra.773?ref=bookmarks",
		email: "ektadogra04@gmail.com",
		contact: "7018428153",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BEkta%20Dogra%7D.jpg?alt=media&token=03296905-7570-4009-bb47-ba0527e8d018"	
	},
	{
		name: "Prateek Yadav",
		fb: "https://www.facebook.com/prateek.yadav.564",
		email: "mprateekyadav24@gmail.com",
		contact: "7340320360",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BPrateek%20Yadav%7D.jpg?alt=media&token=b3888ad5-3dd8-4567-a18a-4f58878f24cd"	
	},
	{
		name: "Shubham Gupta",
		fb: "https://www.facebook.com/profile.php?id=100002514258917",
		email: "yadav2104rao@gmail.com",
		contact: "9729199884",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BShubham%20Gupta%7D.jpg?alt=media&token=02707e00-99cd-4734-befc-d78b6abe29e5"	
	},
	{
		name: "Simran Mehta",
		fb: "",
		email: "",
		contact: "",
		imageUrl: "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BSimran%20Mehta%7D.jpg?alt=media&token=226a0cf8-aaa1-4182-b80e-819a63a0322dhttps://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Convener%2F%7BSimran%20Mehta%7D.jpg?alt=media&token=226a0cf8-aaa1-4182-b80e-819a63a0322d"	
	},

]

class TeamConflu extends Component {

	componentDidMount() {
    setTimeout(function () {
      document.getElementById('loader').classList.add('hide');
      document.getElementById('root').classList.remove('hide');
    }, 1000);
	}
	
  render() {
    return (
      <div className="team_confluence">
        <h2 className="team_heading">
				<Link to='/'>
					<a class="btn-floating btn-small waves-effect backhome" href="#"><i class="material-icons">arrow_back</i></a>
        </Link>  
					<img src={window.location.origin + '/img/team_confluence.svg'} alt="team_logo" />
        </h2>
        <div className="team_wrapper">
          <div className="team_card_plate row">
            {
              convener.map((el, i) => {
                return (
                  <div className="col l3 m4 s6 person_card" key={i}>
                    <div className="back_plate">
                      <div className="person_img">
                        <img src={el.imageUrl} alt="convener" />
                      </div>
                    </div>
                    <div className="person_info">
                      <div className="person_name">{el.name}</div>
                      <div className="person_contact">{el.contact}</div>
                    </div>
                    <div className="person_social">
                      <a href={el.fb} className="person_btn person_facebook" target='_blank' rel="noopener noreferrer">facebook</a>
                      <a href={`mailto:{el.email}`} className="person_btn person_gmail" target='_blank' rel="noopener noreferrer">gmail</a>
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
