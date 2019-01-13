
// const getAllEvents = store => store.events;

export const getEventsCategory = (allEvents, catgeory) => {

    // const allEvents = getAllEvents(store);

    console.log('service');
    console.log('allevents -- ', allEvents);
    console.log('category -- ', catgeory);


    if(allEvents[catgeory]) {
        return allEvents[catgeory];
    }
    return null;
}