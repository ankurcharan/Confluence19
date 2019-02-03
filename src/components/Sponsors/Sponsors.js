import React from 'react';

// import ht from './shtml.html';
import './scss.css';


// import photo1 from './img/Logo_Unit.png';

import photo1 from './confluence-logo-svg-vector.svg';

import photo2 from './img/marketing/Nivea.png';
import photo3 from './img/marketing/Arctic FOx Logo-01_Jpeg file.jpg';
import photo4 from './img/marketing/HDFC.jpg';
import photo5 from './img/marketing/Copy of Snickers.jpg';

class Sponsors extends React.Component {

	render() {

		return (

			<div id='festSponsors'>


				<header className="masthead">
					<img
						//src={photo1}
						src={window.location.origin + '/img/sponsor_header.svg'}
						alt='confluence logo'
					/>

				</header>

				<section id='titleSponsors'>

					<div className='container'>
						<h3 className='center sponsorSection'>
							Title Sponsors
					</h3>
						<div className='row'>

							<div className='col s12 m6 l4 portfolio-item'>
								<a
									className="portfolio-link"
									href="https://www.nivea.in/"
									target="_blank"
								>
									<div className="helper"></div>
									<img className="img-fluid" src={photo3} alt="Nivea" />
								</a>
								<div class="portfolio-caption">
									<h4 className='sponsorName'>Nivea</h4>
									{/* <p class="text-muted">Powered By</p> */}
									<em className='sponTagline'>helo</em>
								</div>
							</div>

							<div className='col s12 m6 l4 portfolio-item'>
								<a
									class="portfolio-link"
									href="https://www.nivea.in/"
									target="_blank"
								>
									<div class="helper"></div>
									<img class="img-fluid" src={photo3} alt="Nivea" />
								</a>
								<div class="portfolio-caption">
									<h4 className='sponsorName'>Nivea</h4>
									{/* <p class="text-muted">Powered By</p> */}
									<em className='sponTagline'>helo</em>
								</div>
							</div>

							<div className='col s12 m6 l4 portfolio-item'>
								<a
									class="portfolio-link"
									href="https://www.nivea.in/"
									target="_blank"
								>
									<div class="helper"></div>
									<img class="img-fluid" src={photo3} alt="Nivea" />
								</a>
								<div class="portfolio-caption">
									<h4>Nivea</h4>
									<em className='sponTagline'>helo</em>
								</div>
							</div>

						</div>
					</div>
				</section>




				<section id='titleSponsors'>

					<div className='container'>
						<h3 className='center sponsorSection'>
							Educational Partners
					</h3>
						<div className='row'>

							<div className='col s12 m6 l4 portfolio-item'>
								<a
									class="portfolio-link"
									href="https://www.nivea.in/"
									target="_blank"
								>
									<div class="helper"></div>
									<img class="img-fluid" src={photo3} alt="Nivea" />
								</a>
								<div class="portfolio-caption">
									<h4 className='sponsorName'>Nivea</h4>
									{/* <p class="text-muted">Powered By</p> */}
									<em className='sponTagline'>helo</em>
								</div>
							</div>

							<div className='col s12 m6 l4 portfolio-item'>
								<a
									class="portfolio-link"
									href="https://www.nivea.in/"
									target="_blank"
								>
									<div class="helper"></div>
									<img class="img-fluid" src={photo3} alt="Nivea" />
								</a>
								<div class="portfolio-caption">
									<h4 className='sponsorName'>Nivea</h4>
									{/* <p class="text-muted">Powered By</p> */}
									<em className='sponTagline'>helo</em>
								</div>
							</div>

							<div className='col s12 m6 l4 portfolio-item'>
								<a
									class="portfolio-link"
									href="https://www.nivea.in/"
									target="_blank"
								>
									<div class="helper"></div>
									<img class="img-fluid" src={photo3} alt="Nivea" />
								</a>
								<div class="portfolio-caption">
									<h4>Nivea</h4>
									<em className='sponTagline'>helo</em>
								</div>
							</div>

						</div>
					</div>
				</section>


				{/* <section id="partners">
			<div class="container">
			<div class="row">
			<div class="col-12 portfolio-item">
			<a class="portfolio-linktitle " href="https://www.snapchat.com/" target="_blank">
			<img class="img-fluid" src="img/marketing/Snapchat_Ghost.png" alt="" />
			</a>
			<div class="portfolio-caption">
			<h4>Snapchat</h4>
			<p class="text-muted">Title Sponsor</p>
			</div>
		</div> */}
				{/* <div class="col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.nivea.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Nivea.png" alt="Nivea" /></a><div class="portfolio-caption"><h4>Nivea</h4><p class="text-muted">Powered By</p></div></div>
		<div class="col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.ucweb.com/ucbrowser/download/android.html" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/UC%20Browser%20Logo.png" alt="UC Browser" /></a><div class="portfolio-caption"><h4>UC Browser</h4><p class="text-muted">Co-Sponsored By</p></div></div>
		<div class="col-sm-6 portfolio-item"><a class="portfolio-link" href="https://hindustantimes.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/HT%20Scroll%20Logo-1.jpg" alt="Hindustan Times" /></a><div class="portfolio-caption"><h4>Hindustan Times</h4><p class="text-muted">in Association with</p></div></div>
	<div class="col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.onlinesbi.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/SBI_logo2018.png" alt="SBI" style={{ height: 50% }} /></a><div class="portfolio-caption"><h4>SBI</h4><p class="text-muted">Banking Partner </p></div></div> */}
				{/* </div> */}

				{/* <div class="row">
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.r-elan.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src={photo2} alt="R-Elan" /></a><div class="portfolio-caption"><h4>R-Elan</h4><p class="text-muted">Earth Style Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.arcticfox.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src={photo3} alt="Arctic Fox" /></a><div class="portfolio-caption"><h4>Arctic Fox</h4><p class="text-muted">Backpack Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.gshock.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src={photo4} alt="G-Shock" /></a><div class="portfolio-caption"><h4>G-Shock</h4><p class="text-muted">Time Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.bisleri.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src={photo5} alt="Bisleri" /></a><div class="portfolio-caption"><h4>Bisleri</h4><p class="text-muted">Beverage Partner</p></div></div> */}
				{/*
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.mtvindia.com/colorsofyouth/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Final%20Logo.png" alt="Colors Of Youth"></a><div class="portfolio-caption"><h4>Colors Of Youth</h4><p class="text-muted">Youth Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.facebook.com/TooYumm/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Copy%20of%20Too%20Yumm%20Logo%20-%20reverse.jpg" alt="Too Yumm!"></a><div class="portfolio-caption"><h4>Too Yumm!</h4><p class="text-muted">Health Snack Partner</p></div></div>          
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://play.google.com/store/apps/details?id=com.aio.actitout&amp;hl=en_IN" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Copy%20of%20LOGO.png" alt="Act It Out"></a><div class="portfolio-caption"><h4>Act It Out</h4><p class="text-muted">Online Auditions Partner Partner</p></div></div>          
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.mars.com/global/brands/confectionery/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Copy%20of%20Snickers.jpg" alt="Snickers"></a><div class="portfolio-caption"><h4>Snickers</h4><p class="text-muted">Chocolate Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.kvic.org.in/kvicres/index.php" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/KVIC%20Logo.png" alt="KVIC"></a><div class="portfolio-caption"><h4>KVIC</h4><p class="text-muted">Vogue Title Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.livafluidfashion.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Liva_Logo.jpg" alt="Liva"></a><div class="portfolio-caption"><h4>Liva</h4><p class="text-muted">Fashion Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.nykaa.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Copy%20of%20nykaa%20cosmetics%20logo.png" alt="Nykaa"></a><div class="portfolio-caption"><h4>Nykaa</h4><p class="text-muted">Beauty Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.stayfree.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Stayfree%20Logo-1.jpg" alt="Stayfree"></a><div class="portfolio-caption"><h4>Stayfree</h4><p class="text-muted">Intimate Hygiene Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.icicibank.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/ICICI.jpg" alt="ICICI"></a><div class="portfolio-caption"><h4>ICICI</h4><p class="text-muted">Payments Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.relaxofootwear.com/sparx/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/sparx%20logo.jpg" alt="Sparx"></a><div class="portfolio-caption"><h4>Sparx</h4><p class="text-muted">Footwear Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.iocl.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/indianoil.jpg" alt="Indian Oil"></a><div class="portfolio-caption"><h4>Indian Oil</h4><p class="text-muted">Fueled By</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://naturellindia.com/ritebite-work-out-bar.html" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Ritebite.jpg" alt="RiteBite"></a><div class="portfolio-caption"><h4>RiteBite</h4><p class="text-muted">Protein Bar Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.kiabza.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Kiabza%20Logo.png" alt="Kiabza"></a><div class="portfolio-caption"><h4>Kiabza</h4><p class="text-muted">Fashion Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.deep-heat.co.uk/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Deepheat.jpg" alt="Deep Heat"></a><div class="portfolio-caption"><h4>Deep Heat</h4><p class="text-muted">Pain Relief Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://ischoolconnect.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/IschoolConnect.jpg" alt="iSchoolConnect"></a><div class="portfolio-caption"><h4>iSchoolConnect</h4><p class="text-muted">Student Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.firstpost.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Firstpost%20Black.png" alt="Firstpost"></a><div class="portfolio-caption"><h4>Firstpost</h4><p class="text-muted">Digital Partner </p></div></div>                               
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.havells.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/1200px-Havells_Logo.svg.png" alt="Havells"></a><div class="portfolio-caption"><h4>Havells</h4><p class="text-muted">Grooming Partner</p></div></div>                                
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://manforcecondoms.com/world.html" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Manforce%20Logo.jpg" alt="Manforce"></a><div class="portfolio-caption"><h4>Manforce</h4><p class="text-muted">Safety Partner</p></div></div>                               
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://fryingpun.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Frying%20pun%20FInal%20logo-pdf-2.png" alt="Frying Pun"></a><div class="portfolio-caption"><h4>Frying Pun</h4><p class="text-muted">Official Merchandise Partner</p></div></div>                               
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://byogi.store/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/BYOGI%20Logo.png" alt="Byogi"></a><div class="portfolio-caption"><h4>Byogi</h4><p class="text-muted">Ethnicwear Partner</p></div></div>                             
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.brylcreemusa.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/brylcreem.jpg" alt="BryIcreem"></a><div class="portfolio-caption"><h4>BryIcreem</h4><p class="text-muted">Men Hairstyling Partner </p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/pubgmobile.in.official/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/pubg.png" alt="PubG"></a><div class="portfolio-caption"><h4>PubG Mobile</h4><p class="text-muted">Adventure Sports Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.dhl.co.in/en/express.html" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/DHL.png" alt="DHL"></a><div class="portfolio-caption"><h4>DHL</h4><p class="text-muted">Logistics Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.fernhotels.com/meluha-the-fern-mumbai.html" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/index.html" alt="Meluha"></a><div class="portfolio-caption"><h4>Meluha</h4><p class="text-muted">International Hospitality Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.townscript.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/townscript.jpg" alt="Townscript"></a><div class="portfolio-caption"><h4>Townscript</h4><p class="text-muted">Payments Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.hdfcbank.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/HDFC.jpg" alt="HDFC Bank"></a><div class="portfolio-caption"><h4>HDFC Bank</h4><p class="text-muted">Platinum Concerts Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/time.png" alt="TIME"></a><div class="portfolio-caption"><h4>TIME</h4><p class="text-muted">Education Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/index.html" alt="Droom"></a><div class="portfolio-caption"><h4>Droom</h4><p class="text-muted"> Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.lincpen.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/uniball.png" alt="Uniball"></a><div class="portfolio-caption"><h4>Uniball</h4><p class="text-muted">Writing Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/kwikmint.png" alt="Kwik Mint"></a><div class="portfolio-caption"><h4>Kwik Mint</h4><p class="text-muted">Mint Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://mynewcar.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/mynewcar.png" alt="MyNewCar"></a><div class="portfolio-caption"><h4>MyNewCar</h4><p class="text-muted">Car Deals Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://m.happyeasygo.com/"target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/happyeasygo.png" alt="HappyEasyGo"></a><div class="portfolio-caption"><h4>HappyEasyGo</h4><p class="text-muted">Travel Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/index.html" alt="GoNoise"></a><div class="portfolio-caption"><h4>GoNoise</h4><p class="text-muted"> Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/imagica.png" alt="Imagica"></a><div class="portfolio-caption"><h4>Imagica</h4><p class="text-muted">Entertainment Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.vishumoney.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/vishu.png" alt="VishUMoney"></a><div class="portfolio-caption"><h4>VishUMoney</h4><p class="text-muted">Digital Deals Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.monsterenergy.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/monster.png" alt="Monster"></a><div class="portfolio-caption"><h4>Monster</h4><p class="text-muted">Energy Drink Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.royalenfield.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/royal.png" alt="Royal Enfiled"></a><div class="portfolio-caption"><h4>Royal Enfiled</h4><p class="text-muted">2 Wheeler Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.ktm.com/en/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/ktm.png" alt="KTM"></a><div class="portfolio-caption"><h4>KTM</h4><p class="text-muted">Stunt Showcase Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://canarabank.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/canara.png" alt="Canara Bank"></a><div class="portfolio-caption"><h4>Canara Bank</h4><p class="text-muted">Banking Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.furtadosonline.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/furtados.jpg" alt="Canara Bank"></a><div class="portfolio-caption"><h4>Furtados</h4><p class="text-muted">Music Gear Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://canarabank.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/canara.png" alt="Canara Bank"></a><div class="portfolio-caption"><h4>Canara Bank</h4><p class="text-muted">Banking Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/portronics.jpg" alt="Portronics Bank"></a><div class="portfolio-caption"><h4>Portronics Bank</h4><p class="text-muted">Portable Gadgets Partner</p></div></div>   
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/growfitter.png" alt="Growfitter Bank"></a><div class="portfolio-caption"><h4>Growfitter Bank</h4><p class="text-muted"> Partner</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.pokersaint.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/poker.png" alt="Growfitter Bank"></a><div class="portfolio-caption"><h4>Poker Saint</h4><p class="text-muted">Poker Nite Partner</p></div></div> 
*/}
				{/* </div>
	</div>
</section> */}

				{/**
	<section id="events">
	<div class="container">
	<div class="row">
	<div class="col-lg-12 text-center">
	<h2 class="section-heading text-uppercase">Events Partners</h2>
	</div>
	</div>
	<div class="row">
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/event/Israel.jpg" alt="Israel Consulate" /></a><div class="portfolio-caption"><h4>Israel Consulate</h4><p class="text-muted">Event Associate</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/event/Indonesia.jpg" alt="Indonesian Consulate" /></a><div class="portfolio-caption"><h4>Indonesian Consulate</h4><p class="text-muted">Event Associate</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/event/t1.jpg" alt="Taiwan Chamber of Commerce" /></a><div class="portfolio-caption"><h4>Taiwan Chamber of Commerce</h4><p class="text-muted">Event Associate</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/event/Taiwan%201.jpg" alt="Taiwan Tourism Board" /></a><div class="portfolio-caption"><h4>Taiwan Tourism Board</h4><p class="text-muted">Event Associate</p></div></div>
	<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/event/Aiesec.png" alt="AIESEC" /></a><div class="portfolio-caption"><h4>AIESEC</h4><p class="text-muted">Youth Outreach Partner</p></div></div>
	</div>
	</div>
</section> */}

				{/* </section> */}
				{/* <section id="food">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Food Partners</h2>
</div>
</div>
<div class="row team-members">
<div class="col-xs-12">
FnB Head:
</div>
</div>
<div class="row no-flex">
<div class="col-12">
<div class="team-member">
<h4>Kabir<br />Tandon</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:kabir@moodi.org">kabir@moodi.org</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+918291472037">+91-8291472037</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="https://www.facebook.com/kabir.tandon.39">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="#">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.zomato.com/mumbai/the-stables-peninsula-redpine-marol" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/The%20Stables.png" alt="The Stables" /></a><div class="portfolio-caption"><h4>The Stables</h4><p class="text-muted">Music Venue Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://dinshaws.co.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/dinshaws-logo.png" alt="Dinshaw's" /></a><div class="portfolio-caption"><h4>Dinshaw's</h4><p class="text-muted">Ice Cream Partner</p></div></div> */}
				{/*<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.frozenbottle.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/frozen%20bottle%20logo.png" alt="Frozen Bottle"></a><div class="portfolio-caption"><h4>Frozen Bottle</h4><p class="text-muted">Thick Shake Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.chilisindia.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Chillis.png" alt="Chili's"></a><div class="portfolio-caption"><h4>Chili's</h4><p class="text-muted">American Grill Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.snackible.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Dipsters.jpg" alt="Dipsters"></a><div class="portfolio-caption"><h4>Dipsters</h4><p class="text-muted">Dips Snack Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://popman.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Popman.png" alt="Popman"></a><div class="portfolio-caption"><h4>Popman</h4><p class="text-muted">Savory Snack Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.storiafoods.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Storia%20Logo.jpg" alt="Storia foods"></a><div class="portfolio-caption"><h4>Storia foods</h4><p class="text-muted">Shake Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://box8.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Box8.jpg" alt="Box8"></a><div class="portfolio-caption"><h4>Box8</h4><p class="text-muted">Desi Meal Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://order.faasos.io/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Faasos.jpg" alt="Fassos"></a><div class="portfolio-caption"><h4>Faasos</h4><p class="text-muted">Rolls Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.pillsbury.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Pillsbury.png" alt="Pillsburry"></a><div class="portfolio-caption"><h4>Pillsburry</h4><p class="text-muted">Bakery Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.naturevalley.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Nature%20Valley%20Logo.png" alt="Nature Valley"></a><div class="portfolio-caption"><h4>Nature Valley</h4><p class="text-muted">Snack Bar Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.thebelgianwaffle.co/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/BWC%20logo.jpg" alt="Belgian Waffle"></a><div class="portfolio-caption"><h4>Belgian Waffle</h4><p class="text-muted">Waffle Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://newyorkburrito.co.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Brand%20name%20and%20Logo.jpg" alt="New York Burrito"></a><div class="portfolio-caption"><h4>New York Burrito</h4><p class="text-muted">Mexican Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.mandarinoak.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Mandarin%20Oak.jpg" alt="Mandarin Oak"></a><div class="portfolio-caption"><h4>Mandarin Oak</h4><p class="text-muted">Chinese Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://mealofthemoment.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/MOM.jpg" alt="Meal.of.the.Moment"></a><div class="portfolio-caption"><h4>Meal.of.the.Moment</h4><p class="text-muted">Mom's Meal Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.facebook.com/WowMomos/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Wow%20momo.jpg" alt="WOW Momos"></a><div class="portfolio-caption"><h4>Wow Momos</h4><p class="text-muted">Momos Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.facebook.com/thebombayfries/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/TBF.png" alt="The Bombay Fries"></a><div class="portfolio-caption"><h4>The Bombay Fries</h4><p class="text-muted">Fries Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.golivadapav.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Goli%20Vada%20Pav.png" alt="Goli Vada Pav"></a><div class="portfolio-caption"><h4>Goli Vada Pav</h4><p class="text-muted">Vada Pav Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.starbucks.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Starbucks.png" alt="Starbucks"></a><div class="portfolio-caption"><h4>Starbucks</h4><p class="text-muted">Pre-MI Event Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.monginis.net/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Mongini.jpg" alt="Monginis"></a><div class="portfolio-caption"><h4>Monginis</h4><p class="text-muted">Cake Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://online.pizzahut.co.in/home" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/PizzaHut.jpg" alt="Pizza Hut"></a><div class="portfolio-caption"><h4>Pizza Hut</h4><p class="text-muted">Pizza Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.zomato.com/mumbai/two-spoons-powai" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/index.html" alt="Two Spoons"></a><div class="portfolio-caption"><h4>Two Spoons</h4><p class="text-muted">North Indian Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.popicorn.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/popicorn.png" alt="Popicorn"></a><div class="portfolio-caption"><h4>Popicorn</h4><p class="text-muted">Munching Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.epigamia.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/epigami.png" alt="Epigamia"></a><div class="portfolio-caption"><h4>Epigamia</h4><p class="text-muted">Yoghurt Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.loacker.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Loacker%20Logo.jpg" alt="Loacker"></a><div class="portfolio-caption"><h4>Loacker</h4><p class="text-muted">Food Kit Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.biscoff.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Biscoff.png" alt="Biscoff"></a><div class="portfolio-caption"><h4>Biscoff</h4><p class="text-muted">Food Kit Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.zomato.com/mumbai/kfc-powai" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/KFC.jpg" alt="KFC"></a><div class="portfolio-caption"><h4>KFC</h4><p class="text-muted">Fried Chicken Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.zomato.com/mumbai/soul-curry-powai" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Soul.jpg" alt="Soul Curry"></a><div class="portfolio-caption"><h4>Soul Curry</h4><p class="text-muted">Fusion Meals Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.sunfeastyippee.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Yippee.jpg" alt="Yippee Noodles"></a><div class="portfolio-caption"><h4>Yippee Noodles</h4><p class="text-muted">Noodle Partner</p></div></div>
*/}

				{/* </div>
	</div>
</section> */}

				{/* <section id="food-insta">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Food Instagrammers</h2>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/mumbaifoodie/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/mumbai_food.jpg" alt="Mumbai Foodie" /></a><div class="portfolio-caption"><h4>Mumbai Foodie</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/munchymumbai/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Munchy%20mumbai.jpg" alt="Dinshaw's" /></a><div class="portfolio-caption"><h4>Munchy Mumbai</h4><p class="text-muted"></p></div></div> */}
				{/*<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/thefoodpunch/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/the%20food%20punch.jpg" alt="The Food Punch"></a><div class="portfolio-caption"><h4>The Food Punch</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/theglocaljournal/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/theglocaljournal.jpg" alt="The Glocal Journal"></a><div class="portfolio-caption"><h4>The Glocal Journal</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/godbingeon/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Godbingeon.jpg" alt="Godbingeon"></a><div class="portfolio-caption"><h4>Godbingeon</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/eat_travel_click/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/eat%20travel%20click.jpg" alt="Eat Travel Click"></a><div class="portfolio-caption"><h4>Eat Travel Click</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/thedesihoggers/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/hoggers.jpg" alt="The Desi Hoggers"></a><div class="portfolio-caption"><h4>The Desi Hoggers</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/foodie_panda9792/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/foodie.jpg" alt="Foodie Panda"></a><div class="portfolio-caption"><h4>Foodie Panda</h4><p class="text-muted"></p></div></div>

*/}
				{/* </div>
	</div>
</section> */}


				{/* <section id="media">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Media Partners</h2>
</div>
</div>
<div class="row team-members">
<div class="col-xs-12">
Media Heads:
</div>
</div>
<div class="row no-flex">
<div class="col-6">
<div class="team-member">
<h4>Kriti<br />Kamna</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:kriti@moodi.org">kriti@moodi.org</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+91">+91-7783024891</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="https://www.facebook.com/kriti.kamna">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="#">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
<div class="col-6">
<div class="team-member">
<h4>Tanmay<br>Jain</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:kabir@moodi.org">tanmay@moodi.org</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+918291472037">+91-9462901544</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="https://www.facebook.com/tanmay.jain.9003888">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="#">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/HT-1.jpg" alt="Hindustan Times"></a><div class="portfolio-caption"><h4>Hindustan Times</h4><p class="text-muted">Associate Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/Cinepolis.jpg" alt="Cinepolis"></a><div class="portfolio-caption"><h4>Cinepolis</h4><p class="text-muted">Multiplex Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/NBT.jpg" alt="Navbharat Times"></a><div class="portfolio-caption"><h4>Navbharat Times</h4><p class="text-muted">Regional Media Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/MT.png" alt="Maharashtrian Times"></a><div class="portfolio-caption"><h4>Maharashtrian Times</h4><p class="text-muted">Local Media Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/Mirchi.png" alt="Radio Mirchi"></a><div class="portfolio-caption"><h4>Radio Mirchi</h4><p class="text-muted">Radio Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/index.html" alt="ISHQ FM"></a><div class="portfolio-caption"><h4>ISHQ FM</h4><p class="text-muted">Media Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/republic.jpg" alt="Republic TV"></a><div class="portfolio-caption"><h4>Republic TV</h4><p class="text-muted">News Channel Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/MT.png" alt="Mohan Foundation"></a><div class="portfolio-caption"><h4>Mohan Foundation</h4><p class="text-muted">Social Cause Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/du.jpg" alt="DU Beat"></a><div class="portfolio-caption"><h4>DU Beat</h4><p class="text-muted">Media Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/phoenix.jpg" alt="Phoenix Market city"></a><div class="portfolio-caption"><h4>Phoenix Market city</h4><p class="text-muted">Mumbai Multicity Venue Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/youth.png" alt="Youth Inc"></a><div class="portfolio-caption"><h4>Youth Inc</h4><p class="text-muted">Magazine partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/woman.png" alt="Woman's Era"></a><div class="portfolio-caption"><h4>Woman's Era</h4><p class="text-muted">Magazine Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/jai.png" alt="Jai Maharashtra"></a><div class="portfolio-caption"><h4>Jai Maharashtra</h4><p class="text-muted">Regional News Channel Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/powai.jpg" alt="My Powai"></a><div class="portfolio-caption"><h4>My Powai</h4><p class="text-muted">Magazine Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/funda.jpg" alt="Fundacurry"></a><div class="portfolio-caption"><h4>Fundacurry</h4><p class="text-muted">Social Media Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/sunrise.png" alt="Sunrise Publicity"></a><div class="portfolio-caption"><h4>Sunrise Publicity</h4><p class="text-muted">Outdoor Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/ATKT.png" alt="ATKT"></a><div class="portfolio-caption"><h4>ATKT</h4><p class="text-muted">Media Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/express.png" alt="INdian Express"></a><div class="portfolio-caption"><h4>Indian Express</h4><p class="text-muted">Online Media Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/inuth.png" alt="Inuth"></a><div class="portfolio-caption"><h4>Inuth</h4><p class="text-muted">Online Media Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/craving.jpg" alt="Craving Bears"></a><div class="portfolio-caption"><h4>Craving Bears</h4><p class="text-muted">Official Photography Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/dream.jpg" alt="DreamTales Studio"></a><div class="portfolio-caption"><h4>DreamTales Studio</h4><p class="text-muted">Bangalore Coverage Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/pune.jpg" alt="La Illusion"></a><div class="portfolio-caption"><h4>La Illusion</h4><p class="text-muted">Pune Coverage Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/index.html" alt="Galaxy Shooters"></a><div class="portfolio-caption"><h4>Galaxy Shooters</h4><p class="text-muted">Aaveg Coverage Partner</p></div></div>

<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://rollingstoneindia.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/Media - rolling-stone-india-logo.png" alt="Rolling Stone India"></a><div class="portfolio-caption"><h4>Rolling Stone India</h4><p class="text-muted">Media Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://maharashtratimes.indiatimes.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/MaTa.png" alt="Maharashtra Times"></a><div class="portfolio-caption"><h4>Maharashtra Times</h4><p class="text-muted">Regional Media Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.mumbailive.com/en" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/MumbaiLive.png" alt="Mumbai Live"></a><div class="portfolio-caption"><h4>Mumbai Live</h4><p class="text-muted">Media Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://t2online.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/T2online.png" alt="T2 online"></a><div class="portfolio-caption"><h4>T2 online</h4><p class="text-muted">Media Partner</p></div></div-->                                        
</div>
</div>
</section>
<section class="bg-light" id="lyp">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Live Your Passion Partners</h2>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/dancefit.png" alt="DanceFit"></a><div class="portfolio-caption"><h4>DanceFit</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/thespo.png" alt="Thespo"></a><div class="portfolio-caption"><h4>Thespo</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/nritya.jpg" alt="Nrityashakti"></a><div class="portfolio-caption"><h4>Nrityashakti</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/clc.png" alt="Canvas Laugh Club"></a><div class="portfolio-caption"><h4>Canvas Laugh Club</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/ritam.jpg" alt="Ritam Banerjee Photography"></a><div class="portfolio-caption"><h4>Ritam Banerjee Photography</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/jaipur.png" alt="Jaipur International Film Festival"></a><div class="portfolio-caption"><h4>Jaipur International Film Festival</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/women.png" alt="Women's Era"></a><div class="portfolio-caption"><h4>Women's Era</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/subi.jpg" alt="Subi Samuel"></a><div class="portfolio-caption"><h4>Subi Samuel</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/jatin.png" alt="Jatin Kampani"></a><div class="portfolio-caption"><h4>Jatin Kampani</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/anima.html" alt="Anima Creative Management"></a><div class="portfolio-caption"><h4>Anima Creative Management</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/ATKT.html" alt="ATKT"></a><div class="portfolio-caption"><h4>ATKT</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/oneiros.jpg" alt="Oneiors, MUJ"></a><div class="portfolio-caption"><h4>Oneiors, MUJ</h4><p class="text-muted">Multicity Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/pecfest.png" alt="Pecfest, Chandigarh"></a><div class="portfolio-caption"><h4>Pecfest, Chandigarh</h4><p class="text-muted">Multicity Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/aarohi.png" alt="Aarohi"></a><div class="portfolio-caption"><h4>Aarohi</h4><p class="text-muted">Multicity Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/tdp.jpg" alt="The Dance Project"></a><div class="portfolio-caption"><h4>The Dance Project</h4><p class="text-muted">Choreonite Powered Sponsor</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.facebook.com/Rangshila/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/Rangshila%20logo.png" alt="Rangshila"></a><div class="portfolio-caption"><h4>Rangshila Theater Group</h4><p class="text-muted">LYP Associate</p></div></div>
</div>
</div>
</section> */}

				{/* <Ambiance Partners> */}
				{/* <section id="amb">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Ambiance Partners</h2>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.facebook.com/AstronomiaShoppe" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/a.png" alt="Astonomia Shoppe"></a><div class="portfolio-caption"><h4>Astonomia Shoppe</h4><p class="text-muted">Party Merchandise Partner</p></div></div>
</div>
</div>
</section>

<header class="masthead">
<div class="container">
<div class="row team-members">
<div class="col-xs-12">
Marketing Heads:
</div>
</div>
<div class="row no-flex">
<div class="col-sm-4 col-6">
<div class="team-member">
<h4>XYZ<br>pqr</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:">xyz@pqr</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+1111111111">+91-811111111</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="fblink">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="linked in link">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
<div class="col-sm-4 col-6">
<div class="team-member">
<h4>XYZ<br>pqr</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:">xyz@pqr</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+1111111111">+91-811111111</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="fblink">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="linked in link">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
<div class="col-sm-4 col-6">
<div class="team-member">
<h4>XYZ<br>pqr</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:">xyz@pqr</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+1111111111">+91-811111111</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="fblink">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="linked in link">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="row block">
<img src="img/Logo_Unit.png" />
</div>
</div>
</div>
</header>
<!-- Footer -->
<footer class="bg-light">
<div class="container">
<div class="row">
<div class="col-md-3">
</div>
<div class="col-md-6">
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="https://www.instagram.com/iitbombay.moodi/">
<i class="fa fa-instagram"></i>
</a>
</li>
<li class="list-inline-item">
<a href="https://twitter.com/iitb_moodi">
<i class="fa fa-twitter"></i>
</a>
</li>
<li class="list-inline-item">
<a href="https://www.facebook.com/iitb.moodindigo/">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="https://www.youtube.com/channel/UCr-wK3LzQOY8ZiagfxPp4Lg">
<i class="fa fa-youtube"></i>
</a>
</li>
<li class="list-inline-item">
<a href="https://www.linkedin.com/company/295177/">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
</footer> */}

				{/* <!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
	<div class="container">
	<a class="navbar-brand js-scroll-trigger" href="#page-top">Previous </a>
	<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i>
	</button>
	<div class="collapse navbar-collapse" id="navbarResponsive">
	<ul class="navbar-nav text-uppercase ml-auto">
	<li class="nav-item">
	<a class="nav-link js-scroll-trigger" href="#events">Events</a>
	</li>
	<li class="nav-item">
	<a class="nav-link js-scroll-trigger" href="#food">Food</a>
	</li>
	<li class="nav-item">
	<a class="nav-link js-scroll-trigger" href="#food-insta">Food Instagrammers</a>
	</li>
	<li class="nav-item">
	<a class="nav-link js-scroll-trigger" href="#lyp">LYP</a>
	</li>
	<li class="nav-item">
	<a class="nav-link js-scroll-trigger" href="#amb">Ambiance</a>
	</li>
	</ul>
	</div>
	</div>
	</nav>
	
	
	<!-- Portfolio Modals -->
	
	
	<!-- Header -->
	<header class="masthead">
	<div class="container">
	
	<div class="padding-top-sponser" >
	</div>             
	<div class="row block">
	<img src="img/Logo_Unit.png" />
	</div>
	</div>
</header> */}

				{/* <!-- Services -->
	<section id="partners">
	<div class="container">
	<div class="row">
	<div class="col-12 portfolio-item">
	<a class="portfolio-linktitle " href="https://www.snapchat.com/" target="_blank">
	<img class="img-fluid" src="img/marketing/Snapchat_Ghost.png" alt="">
	</a>
	<div class="portfolio-caption">
	<h4>Snapchat</h4>
	<p class="text-muted">Title Sponsor</p>
	</div>
	</div>
	<div class="col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.nivea.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Nivea.png" alt="Nivea"></a><div class="portfolio-caption"><h4>Nivea</h4><p class="text-muted">Powered By</p></div></div>
	<div class="col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.ucweb.com/ucbrowser/download/android.html" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/UC%20Browser%20Logo.png" alt="UC Browser"></a><div class="portfolio-caption"><h4>UC Browser</h4><p class="text-muted">Co-Sponsored By</p></div></div>
	<div class="col-sm-6 portfolio-item"><a class="portfolio-link" href="https://hindustantimes.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/HT%20Scroll%20Logo-1.jpg" alt="Hindustan Times"></a><div class="portfolio-caption"><h4>Hindustan Times</h4><p class="text-muted">in Association with</p></div></div>
	<div class="col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.onlinesbi.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/SBI_logo2018.png" alt="SBI" style="height: 50%;"></a><div class="portfolio-caption"><h4>SBI</h4><p class="text-muted">Banking Partner </p></div></div>
</div> */}

				{/* <div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.r-elan.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/RELAN%20Logo.jpg" alt="R-Elan"></a><div class="portfolio-caption"><h4>R-Elan</h4><p class="text-muted">Earth Style Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.arcticfox.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Arctic%20FOx%20Logo-01_Jpeg%20file.jpg" alt="Arctic Fox"></a><div class="portfolio-caption"><h4>Arctic Fox</h4><p class="text-muted">Backpack Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.gshock.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/G-Shock%20logo.png" alt="G-Shock"></a><div class="portfolio-caption"><h4>G-Shock</h4><p class="text-muted">Time Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.bisleri.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Copy%20of%20Fonzo.png" alt="Bisleri"></a><div class="portfolio-caption"><h4>Bisleri</h4><p class="text-muted">Beverage Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.mtvindia.com/colorsofyouth/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Final%20Logo.png" alt="Colors Of Youth"></a><div class="portfolio-caption"><h4>Colors Of Youth</h4><p class="text-muted">Youth Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.facebook.com/TooYumm/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Copy%20of%20Too%20Yumm%20Logo%20-%20reverse.jpg" alt="Too Yumm!"></a><div class="portfolio-caption"><h4>Too Yumm!</h4><p class="text-muted">Health Snack Partner</p></div></div>          
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://play.google.com/store/apps/details?id=com.aio.actitout&amp;hl=en_IN" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Copy%20of%20LOGO.png" alt="Act It Out"></a><div class="portfolio-caption"><h4>Act It Out</h4><p class="text-muted">Online Auditions Partner Partner</p></div></div>          
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.mars.com/global/brands/confectionery/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Copy%20of%20Snickers.jpg" alt="Snickers"></a><div class="portfolio-caption"><h4>Snickers</h4><p class="text-muted">Chocolate Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.kvic.org.in/kvicres/index.php" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/KVIC%20Logo.png" alt="KVIC"></a><div class="portfolio-caption"><h4>KVIC</h4><p class="text-muted">Vogue Title Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.livafluidfashion.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Liva_Logo.jpg" alt="Liva"></a><div class="portfolio-caption"><h4>Liva</h4><p class="text-muted">Fashion Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.nykaa.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Copy%20of%20nykaa%20cosmetics%20logo.png" alt="Nykaa"></a><div class="portfolio-caption"><h4>Nykaa</h4><p class="text-muted">Beauty Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.stayfree.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Stayfree%20Logo-1.jpg" alt="Stayfree"></a><div class="portfolio-caption"><h4>Stayfree</h4><p class="text-muted">Intimate Hygiene Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.icicibank.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/ICICI.jpg" alt="ICICI"></a><div class="portfolio-caption"><h4>ICICI</h4><p class="text-muted">Payments Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.relaxofootwear.com/sparx/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/sparx%20logo.jpg" alt="Sparx"></a><div class="portfolio-caption"><h4>Sparx</h4><p class="text-muted">Footwear Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.iocl.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/indianoil.jpg" alt="Indian Oil"></a><div class="portfolio-caption"><h4>Indian Oil</h4><p class="text-muted">Fueled By</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://naturellindia.com/ritebite-work-out-bar.html" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Ritebite.jpg" alt="RiteBite"></a><div class="portfolio-caption"><h4>RiteBite</h4><p class="text-muted">Protein Bar Partner</p></div></div>
<!--div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.auxilo.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/" alt="Auxillo"></a><div class="portfolio-caption"><h4>Auxilo</h4><p class="text-muted">Education Loan Partner</p></div></div-->
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.kiabza.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Kiabza%20Logo.png" alt="Kiabza"></a><div class="portfolio-caption"><h4>Kiabza</h4><p class="text-muted">Fashion Partner</p></div></div>
<!--div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/" alt="Woke"></a><div class="portfolio-caption"><h4>Woke</h4><p class="text-muted">Partner</p></div></div-->
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.deep-heat.co.uk/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Deepheat.jpg" alt="Deep Heat"></a><div class="portfolio-caption"><h4>Deep Heat</h4><p class="text-muted">Pain Relief Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://ischoolconnect.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/IschoolConnect.jpg" alt="iSchoolConnect"></a><div class="portfolio-caption"><h4>iSchoolConnect</h4><p class="text-muted">Student Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.firstpost.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Firstpost%20Black.png" alt="Firstpost"></a><div class="portfolio-caption"><h4>Firstpost</h4><p class="text-muted">Digital Partner </p></div></div>                               
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.havells.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/1200px-Havells_Logo.svg.png" alt="Havells"></a><div class="portfolio-caption"><h4>Havells</h4><p class="text-muted">Grooming Partner</p></div></div>                                
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://manforcecondoms.com/world.html" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Manforce%20Logo.jpg" alt="Manforce"></a><div class="portfolio-caption"><h4>Manforce</h4><p class="text-muted">Safety Partner</p></div></div>                               
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://fryingpun.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/Frying%20pun%20FInal%20logo-pdf-2.png" alt="Frying Pun"></a><div class="portfolio-caption"><h4>Frying Pun</h4><p class="text-muted">Official Merchandise Partner</p></div></div>                               
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://byogi.store/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/BYOGI%20Logo.png" alt="Byogi"></a><div class="portfolio-caption"><h4>Byogi</h4><p class="text-muted">Ethnicwear Partner</p></div></div>                             
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.brylcreemusa.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/brylcreem.jpg" alt="BryIcreem"></a><div class="portfolio-caption"><h4>BryIcreem</h4><p class="text-muted">Men Hairstyling Partner </p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/pubgmobile.in.official/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/pubg.png" alt="PubG"></a><div class="portfolio-caption"><h4>PubG Mobile</h4><p class="text-muted">Adventure Sports Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.dhl.co.in/en/express.html" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/DHL.png" alt="DHL"></a><div class="portfolio-caption"><h4>DHL</h4><p class="text-muted">Logistics Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.fernhotels.com/meluha-the-fern-mumbai.html" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/index.html" alt="Meluha"></a><div class="portfolio-caption"><h4>Meluha</h4><p class="text-muted">International Hospitality Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.townscript.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/townscript.jpg" alt="Townscript"></a><div class="portfolio-caption"><h4>Townscript</h4><p class="text-muted">Payments Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.hdfcbank.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/HDFC.jpg" alt="HDFC Bank"></a><div class="portfolio-caption"><h4>HDFC Bank</h4><p class="text-muted">Platinum Concerts Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/time.png" alt="TIME"></a><div class="portfolio-caption"><h4>TIME</h4><p class="text-muted">Education Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/index.html" alt="Droom"></a><div class="portfolio-caption"><h4>Droom</h4><p class="text-muted"> Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.lincpen.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/uniball.png" alt="Uniball"></a><div class="portfolio-caption"><h4>Uniball</h4><p class="text-muted">Writing Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/kwikmint.png" alt="Kwik Mint"></a><div class="portfolio-caption"><h4>Kwik Mint</h4><p class="text-muted">Mint Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://mynewcar.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/mynewcar.png" alt="MyNewCar"></a><div class="portfolio-caption"><h4>MyNewCar</h4><p class="text-muted">Car Deals Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://m.happyeasygo.com/"target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/happyeasygo.png" alt="HappyEasyGo"></a><div class="portfolio-caption"><h4>HappyEasyGo</h4><p class="text-muted">Travel Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/index.html" alt="GoNoise"></a><div class="portfolio-caption"><h4>GoNoise</h4><p class="text-muted"> Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/imagica.png" alt="Imagica"></a><div class="portfolio-caption"><h4>Imagica</h4><p class="text-muted">Entertainment Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.vishumoney.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/vishu.png" alt="VishUMoney"></a><div class="portfolio-caption"><h4>VishUMoney</h4><p class="text-muted">Digital Deals Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.monsterenergy.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/monster.png" alt="Monster"></a><div class="portfolio-caption"><h4>Monster</h4><p class="text-muted">Energy Drink Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.royalenfield.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/royal.png" alt="Royal Enfiled"></a><div class="portfolio-caption"><h4>Royal Enfiled</h4><p class="text-muted">2 Wheeler Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.ktm.com/en/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/ktm.png" alt="KTM"></a><div class="portfolio-caption"><h4>KTM</h4><p class="text-muted">Stunt Showcase Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://canarabank.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/canara.png" alt="Canara Bank"></a><div class="portfolio-caption"><h4>Canara Bank</h4><p class="text-muted">Banking Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.furtadosonline.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/furtados.jpg" alt="Canara Bank"></a><div class="portfolio-caption"><h4>Furtados</h4><p class="text-muted">Music Gear Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://canarabank.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/canara.png" alt="Canara Bank"></a><div class="portfolio-caption"><h4>Canara Bank</h4><p class="text-muted">Banking Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/portronics.jpg" alt="Portronics Bank"></a><div class="portfolio-caption"><h4>Portronics Bank</h4><p class="text-muted">Portable Gadgets Partner</p></div></div>   
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/growfitter.png" alt="Growfitter Bank"></a><div class="portfolio-caption"><h4>Growfitter Bank</h4><p class="text-muted"> Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.pokersaint.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/marketing/poker.png" alt="Growfitter Bank"></a><div class="portfolio-caption"><h4>Poker Saint</h4><p class="text-muted">Poker Nite Partner</p></div></div>   
</div>
</div>
</section> */}

				{/* <!-- Services --> */}
				{/* <section id="events">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Events Partners</h2>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/event/Israel.jpg" alt="Israel Consulate"></a><div class="portfolio-caption"><h4>Israel Consulate</h4><p class="text-muted">Event Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/event/Indonesia.jpg" alt="Indonesian Consulate"></a><div class="portfolio-caption"><h4>Indonesian Consulate</h4><p class="text-muted">Event Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/event/t1.jpg" alt="Taiwan Chamber of Commerce"></a><div class="portfolio-caption"><h4>Taiwan Chamber of Commerce</h4><p class="text-muted">Event Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/event/Taiwan%201.jpg" alt="Taiwan Tourism Board"></a><div class="portfolio-caption"><h4>Taiwan Tourism Board</h4><p class="text-muted">Event Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/event/Aiesec.png" alt="AIESEC"></a><div class="portfolio-caption"><h4>AIESEC</h4><p class="text-muted">Youth Outreach Partner</p></div></div>
</div>
</div>
</section>

</section> */}
				{/* <!-- Team --> */}
				{/* <section id="food">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Food Partners</h2>
</div>
</div>
<div class="row team-members">
<div class="col-xs-12">
FnB Head:
</div>
</div>
<div class="row no-flex">
<div class="col-12">
<div class="team-member">
<h4>Kabir<br>Tandon</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:kabir@moodi.org">kabir@moodi.org</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+918291472037">+91-8291472037</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="https://www.facebook.com/kabir.tandon.39">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="#">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.zomato.com/mumbai/the-stables-peninsula-redpine-marol" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/The%20Stables.png" alt="The Stables"></a><div class="portfolio-caption"><h4>The Stables</h4><p class="text-muted">Music Venue Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://dinshaws.co.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/dinshaws-logo.png" alt="Dinshaw's"></a><div class="portfolio-caption"><h4>Dinshaw's</h4><p class="text-muted">Ice Cream Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.frozenbottle.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/frozen%20bottle%20logo.png" alt="Frozen Bottle"></a><div class="portfolio-caption"><h4>Frozen Bottle</h4><p class="text-muted">Thick Shake Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.chilisindia.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Chillis.png" alt="Chili's"></a><div class="portfolio-caption"><h4>Chili's</h4><p class="text-muted">American Grill Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.snackible.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Dipsters.jpg" alt="Dipsters"></a><div class="portfolio-caption"><h4>Dipsters</h4><p class="text-muted">Dips Snack Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://popman.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Popman.png" alt="Popman"></a><div class="portfolio-caption"><h4>Popman</h4><p class="text-muted">Savory Snack Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.storiafoods.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Storia%20Logo.jpg" alt="Storia foods"></a><div class="portfolio-caption"><h4>Storia foods</h4><p class="text-muted">Shake Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://box8.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Box8.jpg" alt="Box8"></a><div class="portfolio-caption"><h4>Box8</h4><p class="text-muted">Desi Meal Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://order.faasos.io/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Faasos.jpg" alt="Fassos"></a><div class="portfolio-caption"><h4>Faasos</h4><p class="text-muted">Rolls Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.pillsbury.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Pillsbury.png" alt="Pillsburry"></a><div class="portfolio-caption"><h4>Pillsburry</h4><p class="text-muted">Bakery Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.naturevalley.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Nature%20Valley%20Logo.png" alt="Nature Valley"></a><div class="portfolio-caption"><h4>Nature Valley</h4><p class="text-muted">Snack Bar Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.thebelgianwaffle.co/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/BWC%20logo.jpg" alt="Belgian Waffle"></a><div class="portfolio-caption"><h4>Belgian Waffle</h4><p class="text-muted">Waffle Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://newyorkburrito.co.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Brand%20name%20and%20Logo.jpg" alt="New York Burrito"></a><div class="portfolio-caption"><h4>New York Burrito</h4><p class="text-muted">Mexican Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.mandarinoak.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Mandarin%20Oak.jpg" alt="Mandarin Oak"></a><div class="portfolio-caption"><h4>Mandarin Oak</h4><p class="text-muted">Chinese Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://mealofthemoment.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/MOM.jpg" alt="Meal.of.the.Moment"></a><div class="portfolio-caption"><h4>Meal.of.the.Moment</h4><p class="text-muted">Mom's Meal Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.facebook.com/WowMomos/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Wow%20momo.jpg" alt="WOW Momos"></a><div class="portfolio-caption"><h4>Wow Momos</h4><p class="text-muted">Momos Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.facebook.com/thebombayfries/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/TBF.png" alt="The Bombay Fries"></a><div class="portfolio-caption"><h4>The Bombay Fries</h4><p class="text-muted">Fries Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.golivadapav.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Goli%20Vada%20Pav.png" alt="Goli Vada Pav"></a><div class="portfolio-caption"><h4>Goli Vada Pav</h4><p class="text-muted">Vada Pav Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.starbucks.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Starbucks.png" alt="Starbucks"></a><div class="portfolio-caption"><h4>Starbucks</h4><p class="text-muted">Pre-MI Event Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.monginis.net/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Mongini.jpg" alt="Monginis"></a><div class="portfolio-caption"><h4>Monginis</h4><p class="text-muted">Cake Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://online.pizzahut.co.in/home" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/PizzaHut.jpg" alt="Pizza Hut"></a><div class="portfolio-caption"><h4>Pizza Hut</h4><p class="text-muted">Pizza Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.zomato.com/mumbai/two-spoons-powai" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/index.html" alt="Two Spoons"></a><div class="portfolio-caption"><h4>Two Spoons</h4><p class="text-muted">North Indian Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.popicorn.in/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/popicorn.png" alt="Popicorn"></a><div class="portfolio-caption"><h4>Popicorn</h4><p class="text-muted">Munching Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.epigamia.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/epigami.png" alt="Epigamia"></a><div class="portfolio-caption"><h4>Epigamia</h4><p class="text-muted">Yoghurt Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.loacker.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Loacker%20Logo.jpg" alt="Loacker"></a><div class="portfolio-caption"><h4>Loacker</h4><p class="text-muted">Food Kit Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.biscoff.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Biscoff.png" alt="Biscoff"></a><div class="portfolio-caption"><h4>Biscoff</h4><p class="text-muted">Food Kit Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.zomato.com/mumbai/kfc-powai" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/KFC.jpg" alt="KFC"></a><div class="portfolio-caption"><h4>KFC</h4><p class="text-muted">Fried Chicken Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.zomato.com/mumbai/soul-curry-powai" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Soul.jpg" alt="Soul Curry"></a><div class="portfolio-caption"><h4>Soul Curry</h4><p class="text-muted">Fusion Meals Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://www.sunfeastyippee.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Yippee.jpg" alt="Yippee Noodles"></a><div class="portfolio-caption"><h4>Yippee Noodles</h4><p class="text-muted">Noodle Partner</p></div></div>
</div>
</div>
</section> */}

				{/* <section id="food-insta">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Food Instagrammers</h2>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/mumbaifoodie/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/mumbai_food.jpg" alt="Mumbai Foodie"></a><div class="portfolio-caption"><h4>Mumbai Foodie</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/munchymumbai/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Munchy%20mumbai.jpg" alt="Dinshaw's"></a><div class="portfolio-caption"><h4>Munchy Mumbai</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/thefoodpunch/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/the%20food%20punch.jpg" alt="The Food Punch"></a><div class="portfolio-caption"><h4>The Food Punch</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/theglocaljournal/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/theglocaljournal.jpg" alt="The Glocal Journal"></a><div class="portfolio-caption"><h4>The Glocal Journal</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/godbingeon/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/Godbingeon.jpg" alt="Godbingeon"></a><div class="portfolio-caption"><h4>Godbingeon</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/eat_travel_click/" target="_
ScrollBack
blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/eat%20travel%20click.jpg" alt="Eat Travel Click"></a><div class="portfolio-caption"><h4>Eat Travel Click</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/thedesihoggers/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/hoggers.jpg" alt="The Desi Hoggers"></a><div class="portfolio-caption"><h4>The Desi Hoggers</h4><p class="text-muted"></p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.instagram.com/foodie_panda9792/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/fnb/foodie.jpg" alt="Foodie Panda"></a><div class="portfolio-caption"><h4>Foodie Panda</h4><p class="text-muted"></p></div></div>
</div>
</section> */}


				{/* <section id="media">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Media Partners</h2>
</div>
</div>
<div class="row team-members">
<div class="col-xs-12">
Media Heads:
</div>
</div>
<div class="row no-flex">
<div class="col-6">
<div class="team-member">
<h4>Kriti<br>Kamna</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:kriti@moodi.org">kriti@moodi.org</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+91">+91-7783024891</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="https://www.facebook.com/kriti.kamna">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="#">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
<div class="col-6">
<div class="team-member">
<h4>Tanmay<br>Jain</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:kabir@moodi.org">tanmay@moodi.org</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+918291472037">+91-9462901544</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="https://www.facebook.com/tanmay.jain.9003888">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="#">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/HT-1.jpg" alt="Hindustan Times"></a><div class="portfolio-caption"><h4>Hindustan Times</h4><p class="text-muted">Associate Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/Cinepolis.jpg" alt="Cinepolis"></a><div class="portfolio-caption"><h4>Cinepolis</h4><p class="text-muted">Multiplex Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/NBT.jpg" alt="Navbharat Times"></a><div class="portfolio-caption"><h4>Navbharat Times</h4><p class="text-muted">Regional Media Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/MT.png" alt="Maharashtrian Times"></a><div class="portfolio-caption"><h4>Maharashtrian Times</h4><p class="text-muted">Local Media Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/Mirchi.png" alt="Radio Mirchi"></a><div class="portfolio-caption"><h4>Radio Mirchi</h4><p class="text-muted">Radio Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/index.html" alt="ISHQ FM"></a><div class="portfolio-caption"><h4>ISHQ FM</h4><p class="text-muted">Media Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/republic.jpg" alt="Republic TV"></a><div class="portfolio-caption"><h4>Republic TV</h4><p class="text-muted">News Channel Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/MT.png" alt="Mohan Foundation"></a><div class="portfolio-caption"><h4>Mohan Foundation</h4><p class="text-muted">Social Cause Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/du.jpg" alt="DU Beat"></a><div class="portfolio-caption"><h4>DU Beat</h4><p class="text-muted">Media Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/phoenix.jpg" alt="Phoenix Market city"></a><div class="portfolio-caption"><h4>Phoenix Market city</h4><p class="text-muted">Mumbai Multicity Venue Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/youth.png" alt="Youth Inc"></a><div class="portfolio-caption"><h4>Youth Inc</h4><p class="text-muted">Magazine partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/woman.png" alt="Woman's Era"></a><div class="portfolio-caption"><h4>Woman's Era</h4><p class="text-muted">Magazine Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/jai.png" alt="Jai Maharashtra"></a><div class="portfolio-caption"><h4>Jai Maharashtra</h4><p class="text-muted">Regional News Channel Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/powai.jpg" alt="My Powai"></a><div class="portfolio-caption"><h4>My Powai</h4><p class="text-muted">Magazine Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/funda.jpg" alt="Fundacurry"></a><div class="portfolio-caption"><h4>Fundacurry</h4><p class="text-muted">Social Media Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/sunrise.png" alt="Sunrise Publicity"></a><div class="portfolio-caption"><h4>Sunrise Publicity</h4><p class="text-muted">Outdoor Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/ATKT.png" alt="ATKT"></a><div class="portfolio-caption"><h4>ATKT</h4><p class="text-muted">Media Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/express.png" alt="INdian Express"></a><div class="portfolio-caption"><h4>Indian Express</h4><p class="text-muted">Online Media Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/inuth.png" alt="Inuth"></a><div class="portfolio-caption"><h4>Inuth</h4><p class="text-muted">Online Media Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/craving.jpg" alt="Craving Bears"></a><div class="portfolio-caption"><h4>Craving Bears</h4><p class="text-muted">Official Photography Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/dream.jpg" alt="DreamTales Studio"></a><div class="portfolio-caption"><h4>DreamTales Studio</h4><p class="text-muted">Bangalore Coverage Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/pune.jpg" alt="La Illusion"></a><div class="portfolio-caption"><h4>La Illusion</h4><p class="text-muted">Pune Coverage Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/index.html" alt="Galaxy Shooters"></a><div class="portfolio-caption"><h4>Galaxy Shooters</h4><p class="text-muted">Aaveg Coverage Partner</p></div></div> */}

				{/* <!--div class="col-md-4 col-sm-6 portfolio-item"> */}
				{/* <a class="portfolio-link" href="http://www.timesnownews.com/mirrornow/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/media/MirrorNow.png" alt="Mirror Now"></a><div class="portfolio-caption"><h4>Mirror Now</h4><p class="text-muted">News Channel Partner</p></div></div>                                        
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://rollingstoneindia.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/Media - rolling-stone-india-logo.png" alt="Rolling Stone India"></a><div class="portfolio-caption"><h4>Rolling Stone India</h4><p class="text-muted">Media Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://maharashtratimes.indiatimes.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/MaTa.png" alt="Maharashtra Times"></a><div class="portfolio-caption"><h4>Maharashtra Times</h4><p class="text-muted">Regional Media Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.mumbailive.com/en" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/MumbaiLive.png" alt="Mumbai Live"></a><div class="portfolio-caption"><h4>Mumbai Live</h4><p class="text-muted">Media Partner</p></div></div>                                       
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="http://t2online.com/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/T2online.png" alt="T2 online"></a><div class="portfolio-caption"><h4>T2 online</h4><p class="text-muted">Media Partner</p></div></div-->                                        
</div>
</div>
</section>
<section class="bg-light" id="lyp">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Live Your Passion Partners</h2>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/dancefit.png" alt="DanceFit"></a><div class="portfolio-caption"><h4>DanceFit</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/thespo.png" alt="Thespo"></a><div class="portfolio-caption"><h4>Thespo</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/nritya.jpg" alt="Nrityashakti"></a><div class="portfolio-caption"><h4>Nrityashakti</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/clc.png" alt="Canvas Laugh Club"></a><div class="portfolio-caption"><h4>Canvas Laugh Club</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/ritam.jpg" alt="Ritam Banerjee Photography"></a><div class="portfolio-caption"><h4>Ritam Banerjee Photography</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/jaipur.png" alt="Jaipur International Film Festival"></a><div class="portfolio-caption"><h4>Jaipur International Film Festival</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/women.png" alt="Women's Era"></a><div class="portfolio-caption"><h4>Women's Era</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/subi.jpg" alt="Subi Samuel"></a><div class="portfolio-caption"><h4>Subi Samuel</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/jatin.png" alt="Jatin Kampani"></a><div class="portfolio-caption"><h4>Jatin Kampani</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/anima.html" alt="Anima Creative Management"></a><div class="portfolio-caption"><h4>Anima Creative Management</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/ATKT.html" alt="ATKT"></a><div class="portfolio-caption"><h4>ATKT</h4><p class="text-muted">LYP Associate</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/oneiros.jpg" alt="Oneiors, MUJ"></a><div class="portfolio-caption"><h4>Oneiors, MUJ</h4><p class="text-muted">Multicity Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/pecfest.png" alt="Pecfest, Chandigarh"></a><div class="portfolio-caption"><h4>Pecfest, Chandigarh</h4><p class="text-muted">Multicity Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/aarohi.png" alt="Aarohi"></a><div class="portfolio-caption"><h4>Aarohi</h4><p class="text-muted">Multicity Partner</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="#" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/tdp.jpg" alt="The Dance Project"></a><div class="portfolio-caption"><h4>The Dance Project</h4><p class="text-muted">Choreonite Powered Sponsor</p></div></div>
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.facebook.com/Rangshila/" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/lyp/Rangshila%20logo.png" alt="Rangshila"></a><div class="portfolio-caption"><h4>Rangshila Theater Group</h4><p class="text-muted">LYP Associate</p></div></div>
</div>
</div>
</section> */}

				{/* <Ambiance Partners> */}
				{/* <section id="amb">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<h2 class="section-heading text-uppercase">Ambiance Partners</h2>
</div>
</div>
<div class="row">
<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" href="https://www.facebook.com/AstronomiaShoppe" target="_blank"><div class="helper"></div><img class="img-fluid" src="img/a.png" alt="Astonomia Shoppe"></a><div class="portfolio-caption"><h4>Astonomia Shoppe</h4><p class="text-muted">Party Merchandise Partner</p></div></div>
</div>
</div>
</section>

<header class="masthead">
<div class="container">
<div class="row team-members">
<div class="col-xs-12">
Marketing Heads:
</div>
</div>
<div class="row no-flex">
<div class="col-sm-4 col-6">
<div class="team-member">
<h4>XYZ<br>pqr</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:">xyz@pqr</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+1111111111">+91-811111111</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="fblink">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="linked in link">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
<div class="col-sm-4 col-6">
<div class="team-member">
<h4>XYZ<br>pqr</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:">xyz@pqr</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+1111111111">+91-811111111</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="fblink">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="linked in link">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
<div class="col-sm-4 col-6">
<div class="team-member">
<h4>XYZ<br>pqr</h4>
<p class="text-muted" style="margin-bottom: 0"><a href="mailto:">xyz@pqr</a></p>
<p class="text-muted" style="margin-bottom: 0"><a href="tel:+1111111111">+91-811111111</a></p> 
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="fblink">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="linked in link">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
<div class="row block">
<img src="img/Logo_Unit.png" />
</div>
</div>
</div>
</header> */}
				{/* <!-- Footer --> */}
				{/* <footer class="bg-light">
<div class="container">
<div class="row">
<div class="col-md-3">
</div>
<div class="col-md-6">
<ul class="list-inline social-buttons">
<li class="list-inline-item">
<a href="https://www.instagram.com/iitbombay.moodi/">
<i class="fa fa-instagram"></i>
</a>
</li>
<li class="list-inline-item">
<a href="https://twitter.com/iitb_moodi">
<i class="fa fa-twitter"></i>
</a>
</li>
<li class="list-inline-item">
<a href="https://www.facebook.com/iitb.moodindigo/">
<i class="fa fa-facebook"></i>
</a>
</li>
<li class="list-inline-item">
<a href="https://www.youtube.com/channel/UCr-wK3LzQOY8ZiagfxPp4Lg">
<i class="fa fa-youtube"></i>
</a>
</li>
<li class="list-inline-item">
<a href="https://www.linkedin.com/company/295177/">
<i class="fa fa-linkedin"></i>
</a>
</li>
</ul>
</div>
</div>
</div>
</footer> */}

			</div>
		);
	}
}

export default Sponsors;