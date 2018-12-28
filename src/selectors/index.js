
const getAllEvents = store => store.events;

export const getEventsCategory = (allEvents, catgeory) => {

    // const allEvents = getAllEvents(store);

    if(allEvents[catgeory]) {
        return allEvents[catgeory];
    }
    return null;
}