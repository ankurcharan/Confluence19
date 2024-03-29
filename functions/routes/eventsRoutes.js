/* eslint-disable promise/no-nesting */
const admin = require('firebase-admin');

const express = require('express');
const app = express.Router();

// database reference
const db = admin.firestore();

const events = db.collection('events');

const eventDescriptionRef = events.doc('eventDescription');
const eventsRef = events.doc('events');

app.route('/')
	.post(addEvent)
	.get(getEvents);

app.route('/names')
	.get(getEventNames);



// returns event names
// from events node
// GET request

// {
//     "success": true,
//     "message": "events names for all categories received",
//     "data": {
//         "events": [
//             {
//                 "category": "dance",
//                 "events": [
//                     {
//                         "eventName": "Dance Event 1",
//                         "endTime": "1545522259731",
//                         "startTime": "1545522259731"
//                     },
//                     {
//                         "eventName": "Dance Event 2",
//                         "endTime": "1545522259731",
//                         "startTime": "1545522259731"
//                     }
//                 ]
//             },
//             {
//                 "category": "literature",
//                 "events": [
//                     {
//                         "eventName": "Literature Event 1",
//                         "endTime": "1545522259731",
//                         "startTime": "1545522259731"
//                     },
//                     {
//                         "eventName": "Literature Event 2",
//                         "endTime": "1545522259731",
//                         "startTime": "1545522259731"
//                     }
//                 ]
//             }
//         ]
//     }
// }

function getEventNames(req, res) {


	let data = {
		events: []
	};

	let promises = [];

	let y = eventsRef.getCollections()
	.then((categories) => {

		categories.forEach((category) => {
			
			let categoryName = category.id;

			let categoryEvents = {};
			categoryEvents.category = categoryName;
			categoryEvents.events = new Array();

			let x = eventsRef.collection(categoryName).get()
				.then((events) => {

					events.forEach((event) => {

						let eventData = event.data();
						delete eventData.category;
						categoryEvents.events.push(eventData);
					})

					data.events.push(categoryEvents);
					return true;
				})
				.catch((err) => {

					return res.status(500).json({
						success: false,
						error: err,
						message: 'Error! Please Try Again.'
					})
				})

			promises.push(x);
		})

		return Promise.all(promises)
		.then(() => {

			return res.status(200).json({
				success: true,
				message: 'events names for all categories received',
				data: data
			})
		})
		.catch((err) => {

			return res.status(500).json({
				success: false,
				error: err,
				message: 'Error! Please Try Again.'
			})
		})
	})
	.catch((err) => {
		
		return res.status(500).json({
			success: false,
			error: err,
			message: 'Error! Please Try Again.'
		})
	})
}
	



// add event to database

// body/raw - jsons

// {
//     "eventName": "EventName2",
//     "startTime": "1545522259731",
//     "endTime": "1545522259731",
//     "category": "Music",
//		"eventDescription": "This is the descriptiom"
//     "rules": [
//     	"This is a rule.",
//     	"This is another rule"
//     ],
//     "venue": "EventVenue",
//     "coordinators": [
//     	{
// 	    	"name": "Coordinator1",
// 	    	"contact": "9878987678"
//     	},
//     	{
//     		"name": "Coordinator2",
//     		"contact": "9878976789"
//     	}
//     ],
//     "prize": "10,000",
//     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/EventPosters%2FFake%20Poster.png?alt=media&token=ded9da16-3753-455a-8cc7-448cc5ef196b"
// }

function addEvent (req, res) {

	let eventDetails = req.body;

	if(eventDetails.category === undefined || eventDetails.eventName === undefined || eventDetails.startTime === undefined || eventDetails.endTime === undefined) {

		return res.status(400).json({
			success: false,
			message: 'send appropriate parameters: eventName, category, startTime, endTime'
		});
	}

	let category = req.body.category.toLowerCase();
	let eventName = req.body.eventName.toLowerCase();


	eventsRef.collection(category).doc(eventName).set({
		eventName: eventDetails.eventName,
		category: eventDetails.category,
		startTime: eventDetails.startTime,
		endTime: eventDetails.endTime
	}).then(() => {

		return console.log(`Added ${eventName} in ${category} in events`);
	})
	.catch((err) => {

		return res.status(500).json({
			success: false,
			message: 'Server Error, Please Try Again',
			error: err
		})
	})
	

	eventDescriptionRef.collection(category).doc(eventName).set(eventDetails)
		.then(() => {

			return res.status(200).json({
				success: true,
				message: `${eventName} event added in ${category} category.`
			});
		})
		.catch((err) => {

			return res.status(500).json({
				success: false,
				message: 'server error, try again',
				error: err
			})
		})

	
}





// GET EVENTS

// get request 
// category in query

// {
//     "success": true,
//     "message": "events of Literature received.",
//     "data": {
//         "events": [
//             {
//                 "coordinators": [
//                     {
//                         "contact": "9878987678",
//                         "name": "Coordinator1"
//                     },
//                     {
//                         "contact": "9878976789",
//                         "name": "Coordinator2"
//                     }
//                 ],
//                 "imageUrl": "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/EventPosters%2FFake%20Poster.png?alt=media&token=ded9da16-3753-455a-8cc7-448cc5ef196b",
//                 "category": "Literature",
//                 "eventName": "EventName",
//                 "prize": "10,000",
//                 "endTime": "1545522259731",
//                 "startTime": "1545522259731",
//                 "venue": "EventVenue",
//                 "rules": [
//                     "This is a rule.",
//                     "This is another rule"
//                 ]
//             }
//         ]
//     }
// }

function getEvents (req, res) {

	console.log(req.query);

	let data = {
		events: []
	}

	let category = req.query.category;
	if(category === undefined) {

		return res.status(400).json({
			success: false,
			message: 'send category'
		});
	}

	let eventName = req.query.eventName;
	if(eventName !== undefined)
	{

		eventDescriptionRef.collection(category.toLowerCase()).doc(eventName.toLowerCase()).get()
			.then((data) => {

				if(!data.exists) {
					res.status(400).json({
						success: false,
						
					})
				}

				return res.status(200).json({
					success: true,
					message: `details of ${eventName} in ${category} received`,
					data: data.data()
				})
			})
			.catch((err) => {

				return res.status(500).json({
					success: false,
					message: 'server error, try again',
					error: err
				})
			})

	} else {
	

		eventDescriptionRef.collection(category.toLowerCase()).get()
			.then((allEvents) => {

				allEvents.forEach((event) => {

					data.events.push(event.data());
				})

				return res.status(200).json({
					success: true,
					message: `events of ${category} received.`,
					data: data
				});
			})
			.catch((err) => {

				return res.status(500).json({
					success: false,
					message: 'unable to fetch events, try again',
					error: err
				})
			})


	}
}

module.exports = app;